import React, { useEffect, useRef, useState } from "react";
import { Text, TinyText } from "../lib/TextComponents";
import {
  Button,
  Card,
  Divider,
  Input,
  Spacer,
  Tooltip,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { ArrowUp, ArrowDown, Trash2 } from "lucide-react";
import { useExamHeaderStore } from "../store/HeaderStore";
import autoAnimate from "@formkit/auto-animate";
import DragAndDropImageUpload from "@/components/DragAndDropImage";

interface InputField {
  name: string;
  placeholder_text: string;
  value_field: string;
  inputValue: string;
  title: string;
  isAdded: boolean;
  placementOnPaper: string;
}

const InputFieldsList = ({
  fields,
  handleDelete,
  handleMoveUp,
  handleMoveDown,
  setFieldsFunction,
}: {
  fields: InputField[];
  handleDelete: (field: InputField) => void;
  handleMoveUp: (field: InputField) => void;
  handleMoveDown: (field: InputField) => void;
  setFieldsFunction: "teacher" | "students";
}) => {
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div ref={parent} className="flex flex-col gap-3">
      {fields.map((field, i) => (
        <div key={field.name} className="mb-2 flex items-center gap-2">
          {field.name == "logo" ? (
            <>
              <DragAndDropImageUpload />
            </>
          ) : (
            <Input
              name={field.name}
              variant="bordered"
              label={field.title}
              value={field.inputValue}
              onChange={(e) => {
                if (setFieldsFunction == "teacher") {
                  useExamHeaderStore
                    .getState()
                    .setTeacherInputs(
                      fields.map((input) =>
                        input.name === field.name
                          ? { ...input, inputValue: e.target.value }
                          : input,
                      ),
                    );
                } else {
                  useExamHeaderStore
                    .getState()
                    .setStudentInputs(
                      fields.map((input) =>
                        input.name === field.name
                          ? { ...input, inputValue: e.target.value }
                          : input,
                      ),
                    );
                }
              }}
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
          )}
          <div className="flex h-full flex-col  items-center">
            <Button
              isDisabled={i == 0}
              isIconOnly
              size="sm"
              variant="light"
              className="cursor-pointer"
              onClick={() => handleMoveUp(field)}
            >
              <ArrowUp size={16} color="gray" />
            </Button>
            <Button
              isDisabled={i == fields.length - 1}
              isIconOnly
              size="sm"
              variant="light"
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
}) => {
  return (
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
};

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
    setTeacherInputs,
    setStudentInputs,
  } = useExamHeaderStore();

  console.log(teacherButtons.length);

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
          setFieldsFunction="teacher"
        />

        <Spacer y={3} />
        {teacherButtons.length != 0 ? (
          <TinyText className="mb-2 text-gray-500">+ Add more fields</TinyText>
        ) : (
          <TinyText className="mb-2 text-gray-500">
            All fields are added
          </TinyText>
        )}
        <AddMoreFields
          fields={teacherButtons}
          handleAdd={(field) => addTeacherField(field)}
        />

        <Spacer y={2} />
        <Divider />
        <Spacer y={2} />
        {studentInputs.length != 0 && (
          <>
            <TinyText className="">Student information</TinyText>
            <TinyText className="text-gray-500">
              The student should fill these fields
            </TinyText>
          </>
        )}
        <Spacer y={2} />
        <InputFieldsList
          fields={studentInputs}
          handleDelete={(field) => removeStudentField(field)}
          handleMoveUp={(field) => moveFieldUp(field, false)}
          handleMoveDown={(field) => moveFieldDown(field, false)}
          setFieldsFunction="students"
        />
        <Spacer y={3} />
        {studentButtons.length !== 0 ? (
          <TinyText className="mb-2 text-gray-500">+ Add more fields</TinyText>
        ) : (
          <TinyText className="mb-2 text-gray-500">
            All fields are added
          </TinyText>
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
