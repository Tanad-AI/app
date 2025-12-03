/* eslint-disable */
"use client";
import React, { useCallback } from "react";
import useReportStore from "../../store/reportStore";
import { Spacer, Card, Input, Button } from "@nextui-org/react";
import { Text } from "../../lib/TextComponents";
import { motion } from "framer-motion";
import { Field } from "../../types/report.typs";
import { useDropzone } from "react-dropzone";
import Tiptap from "@/components/Tiptap";
import { useCreatePageState } from "../../store/CreatePageStore";
import { useTranslations } from "next-intl";

interface ControlProps {
  activeControlView: number;
  className?: string;
}

function View({ activeField }: { activeField: Field | null }) {
  const setFields = useReportStore((state) => state.setFields);
  const fields = useReportStore((state) => state.fields);
  const setReportImages = useReportStore((state) => state.setReportImages);
  const reportImages = useReportStore((state) => state.reportImages);
  const { activeSection, setActiveSection } = useCreatePageState();
  const t = useTranslations("Create");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setReportImages(acceptedFiles.map((img) => URL.createObjectURL(img)));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleInputChange = (detailId: string, newValue: string) => {
    const currentFields = [...fields];

    const currentField = currentFields.find(
      (field) => field.id == activeField?.id,
    );
    const currentDetail = currentField?.details.find(
      (detail) => detail.id == detailId,
    );
    if (currentDetail) {
      currentDetail.value = newValue;
    }
    setFields(currentFields);
  };

  return (
    <div className="h-[400px]">
      <div className="flex items-baseline gap-1">
        <Text>التحكم</Text>
      </div>
      <motion.div
        key={activeField?.id}
        initial={{ y: 15, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.25 }}
      >
        <Spacer y={2} />
        <Card
          radius="sm"
          shadow="none"
          className="flex min-h-full flex-col gap-5 px-3 pb-40 pt-4"
        >
          <div className="flex items-center gap-1">
            <h3>{activeField?.title}</h3>
          </div>
          {activeField?.details.map((detail) =>
            detail.isTextArea ? (
              <Tiptap
                value={detail.value}
                onChange={(value: string) =>
                  handleInputChange(detail.id, value)
                }
              />
            ) : detail.detailName == "images" ? (
              <div
                {...getRootProps({
                  className: `border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-200 ${
                    isDragActive
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-300 hover:border-primary-400 dark:border-gray-600 dark:hover:border-primary-500'
                  }`,
                  dir: 'auto' // This will handle both RTL and LTR text
                })}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center space-y-2">
                  <svg
                    className={`w-12 h-12 mb-3 ${
                      isDragActive ? 'text-primary-500' : 'text-gray-400'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  {isDragActive ? (
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('dropFilesHere')}
                    </p>
                  ) : (
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      <p className="font-medium">{t('dragAndDropFiles')}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {t('orClickToSelect')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Input
                key={detail.id}
                variant="bordered"
                labelPlacement="outside"
                label={detail.title}
                value={detail.value}
                placeholder={detail.placeholder}
                onChange={(e) => handleInputChange(detail.id, e.target.value)}
              />
            ),
          )}
          <Button
            color="secondary"
            onClick={() => setActiveSection(0)}
            className="capitalize text-black md:hidden"
          >
            {t("remainingFields")}
          </Button>
        </Card>
      </motion.div>
    </div>
  );
}

const Control = ({ activeControlView, className }: ControlProps) => {
  const activeField = useReportStore((state) => state.activeField);
  console.log(activeField);
  return (
    <div className={`w-full overflow-y-scroll pb-20 ${className}`}>
      <View activeField={activeField} />
    </div>
  );
};

export default Control;
