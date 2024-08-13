import React, { useEffect, useRef, useState } from "react";
import { Text, TinyText } from "../lib/TextComponents";
import { Button, Card, Input, Spacer, Tooltip } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { X, ArrowUp, ArrowDown, Trash2 } from "lucide-react";
import { useExamHeaderStore } from "../store/HeaderStore";
import autoAnimate from "@formkit/auto-animate";

interface InputField {
  name: string;
  placeholder_text: string;
  value_field: string;
  inputValue: string;
  title: string;
  isAdded: boolean;
}

const InputFieldsList = ({
  fields,
  handleDelete,
  handleMoveUp,
  handleMoveDown,
}: {
  fields: InputField[];
  handleDelete: (field: InputField) => void;
  handleMoveUp: (field: InputField) => void;
  handleMoveDown: (field: InputField) => void;
}) => {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div ref={parent} className="flex flex-col gap-3">
      {fields.map((field, i) => (
        <div key={field.name} className="mb-2 flex items-center gap-2">
          <Input
            name={field.name}
            variant="bordered"
            label={field.title}
            value={field.inputValue}
            onChange={(e) =>
              useExamHeaderStore
                .getState()
                .setTeacherInputs(
                  fields.map((input) =>
                    input.name === field.name
                      ? { ...input, inputValue: e.target.value }
                      : input,
                  ),
                )
            }
            labelPlacement="outside"
            endContent={
              <Tooltip content="Remove Field" size="sm" delay={400}>
                <div
                  className="cursor-pointer"
                  onClick={() => handleDelete(field)}
                >
                  <Trash2 size={14} color="gray" />
                </div>
              </Tooltip>
            }
            placeholder={field.placeholder_text}
          />
          <div className="flex h-full flex-col  items-center gap-2 ">
            <Button
              isDisabled={i == 0}
              isIconOnly
              size="sm"
              variant="ghost"
              className="cursor-pointer"
              onClick={() => handleMoveUp(field)}
            >
              <ArrowUp size={16} color="gray" />
            </Button>
            <Button
              isDisabled={i == fields.length - 1}
              isIconOnly
              size="sm"
              variant="ghost"
              className="cursor-pointer"
              onClick={() => handleMoveDown(field)}
            >
              <ArrowDown size={16} color="gray" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

const AddMoreFields = ({
  fields,
  handleAdd,
}: {
  fields: InputField[];
  handleAdd: (field: InputField) => void;
}) => (
  <div className="flex flex-wrap gap-2">
    {fields.map((field) => (
      <div key={field.name}>
        <Button
          onClick={() => handleAdd(field)}
          variant="faded"
          color="primary"
          size="sm"
          className="rounded-full border-[2px] border-purple-700/10 bg-green-300/15 text-xs font-medium"
        >
          {field.title}
        </Button>
      </div>
    ))}
  </div>
);

const DocumentHeader = () => {
  const t = useTranslations("Create");

  const {
    teacherInputs,
    teacherButtons,
    studentInputs,
    studentButtons,
    addTeacherField,
    removeTeacherField,
    addStudentField,
    removeStudentField,
    moveFieldUp,
    moveFieldDown,
  } = useExamHeaderStore();

  return (
    <div className="h-full">
      <div className="flex cursor-pointer items-baseline gap-1">
        <Text>{t("header")}</Text>
      </div>
      <Spacer y={2} />
      <Card
        radius="sm"
        shadow="none"
        className="flex min-h-full flex-col px-3 pb-14 pt-4"
      >
        <TinyText className="text-gray-500">Exam information</TinyText>
        <Spacer y={2} />

        <InputFieldsList
          fields={teacherInputs}
          handleDelete={(field) => removeTeacherField(field)}
          handleMoveUp={(field) => moveFieldUp(field, true)}
          handleMoveDown={(field) => moveFieldDown(field, true)}
        />

        <Spacer y={3} />
        <TinyText className="mb-2 text-gray-500">+ Add more fields</TinyText>
        <AddMoreFields
          fields={teacherButtons}
          handleAdd={(field) => addTeacherField(field)}
        />

        <Spacer y={2} />
        {studentInputs.length !== 0 && (
          <TinyText className="text-gray-500">Student information</TinyText>
        )}
        <Spacer y={2} />
        <InputFieldsList
          fields={studentInputs}
          handleDelete={(field) => removeStudentField(field)}
          handleMoveUp={(field) => moveFieldUp(field, false)}
          handleMoveDown={(field) => moveFieldDown(field, false)}
        />
        <Spacer y={3} />
        {studentButtons.length !== 0 && (
          <TinyText className="mb-2 text-gray-500">+ Add more fields</TinyText>
        )}
        <AddMoreFields
          fields={studentButtons}
          handleAdd={(field) => addStudentField(field)}
        />
      </Card>
    </div>
  );
};

export default DocumentHeader;
