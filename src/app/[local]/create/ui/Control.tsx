/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import useReportStore from "../../store/reportStore";
import { Spacer, Card, Input, Textarea, Button } from "@nextui-org/react";
import { Text, TinyText } from "../../lib/TextComponents";
import { motion } from "framer-motion";
import { Field } from "../../types/report.typs";

// get the vlue of each input
// get the current value
// chnage the value

interface ControlProps {
  activeControlView: number;
  className?: string;
}

function View({ activeField }: { activeField: Field }) {
  const setFields = useReportStore((state) => state.setFields);
  const fields = useReportStore((state) => state.fields);

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
    <div className="h-full">
      <div className="flex items-baseline gap-1">
        <Text>{activeField.title}</Text>
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
          className="flex min-h-full flex-col gap-3 px-3 pb-40 pt-4"
        >
          <TinyText className="text-gray-500">{activeField.title}</TinyText>
          <Spacer y={2} />
          {activeField.details.map((detail) =>
            detail.isTextArea ? (
              <Textarea
                key={detail.id}
                variant="bordered"
                labelPlacement="outside"
                placeholder="أدخل النص"
                label={detail.title}
                value={detail.value}
                onChange={(e) => handleInputChange(detail.id, e.target.value)}
                classNames={{
                  input: "resize-y min-h-[40px]",
                }}
              ></Textarea>
            ) : (
              <Input
                key={detail.id}
                variant="bordered"
                labelPlacement="outside"
                placeholder="أدخل النص"
                label={detail.title}
                value={detail.value}
                onChange={(e) => handleInputChange(detail.id, e.target.value)}
              />
            ),
          )}
          {activeField.isMultipleLines && (
            <div className="flex w-full justify-center">
              <Button
                variant="faded"
                color="primary"
                size="sm"
                className="w-fit rounded-full border-[2px] border-purple-700/10 bg-green-300/15 text-xs font-medium"
              >
                إضافة سطر
              </Button>
            </div>
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
