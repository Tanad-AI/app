/* eslint-disable */
"use client";
import React, { useCallback } from "react";
import useReportStore from "../../store/reportStore";
import { Spacer, Card, Input } from "@nextui-org/react";
import { Text } from "../../lib/TextComponents";
import { motion } from "framer-motion";
import { Field } from "../../types/report.typs";
import { useDropzone } from "react-dropzone";
import Tiptap from "@/components/Tiptap";

interface ControlProps {
  activeControlView: number;
  className?: string;
}

function View({ activeField }: { activeField: Field }) {
  const setFields = useReportStore((state) => state.setFields);
  const fields = useReportStore((state) => state.fields);
  const setReportImages = useReportStore((state) => state.setReportImages);
  const reportImages = useReportStore((state) => state.reportImages);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setReportImages(acceptedFiles.map((img) => URL.createObjectURL(img)));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleInputChange = (detailId: string, newValue: string) => {
    const currentFields = [...fields];

    const currentField = currentFields.find(
      (field) => field.id == activeField.id,
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
        key={activeField.id}
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
            <h3>{activeField.title}</h3>
          </div>
          {activeField.details.map((detail) =>
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
                  className: `dropzone ${isDragActive ? "active" : ""}`,
                })}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag & drop files here, or click to select files</p>
                )}
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
        </Card>
      </motion.div>
    </div>
  );
}

const Control = ({ activeControlView, className }: ControlProps) => {
  const activeField = useReportStore((state) => state.activeField);
  return (
    <div className={`w-full overflow-y-scroll pb-20 ${className}`}>
      <View activeField={activeField} />
    </div>
  );
};

export default Control;
