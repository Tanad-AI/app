"use client";

import { QuizHeaderFormDataType } from "@/app/create/lib/formsTypes";
import { useQuizHeaderStore } from "@/app/lib/store/QuizState";
import {
  Paragraph,
  SectionHeader,
  Text,
  TinyText,
} from "@/app/lib/TextComponents";
import {
  Accordion,
  AccordionItem,
  Card,
  Input,
  Spacer,
} from "@nextui-org/react";
import { Content } from "next/font/google";
import React, { useRef, useState } from "react";

const headerInfo = [
  {
    label: "Instatute Details",
    name: "instatuteDetails",
    content: [
      {
        label: "School/College Name",
        placeholder: "Harvard",
        type: "text",
        name: "instatuteName",
      },
      {
        label: "Country",
        placeholder: "Harvard",
        type: "text",
        name: "country",
      },
      {
        label: "State Deparment Name",
        placeholder: "New york",
        type: "text",
        name: "stateDepartmentName",
      },
      {
        label: "Ministry / Department name",
        placeholder: "12 grade",
        type: "text",
        name: "countryDepartmentName",
      },
      {
        label: "Teacher's Name",
        placeholder: "20",
        type: "text",
        name: "teacherName",
      },
      {
        label: "Logo",
        placeholder: "School logo",
        type: "file",
        name: "logo",
      },
    ],
  },
  {
    label: "Document Details",
    name: "documentDetails",
    content: [
      {
        label: "subject",
        placeholder: "history",
        name: "subject",
        type: "text",
        required: true,
      },
      {
        label: "Term / Semester",
        placeholder: "Second",
        name: "termSemester",
        type: "text",
        required: true,
      },
      {
        label: "Class",
        placeholder: "12 grade",
        name: "class",
        type: "text",
        required: true,
      },
      {
        label: "Type",
        placeholder: "Final",
        name: "type",
        type: "text",
        required: true,
      },
      {
        label: "Number of Marks",
        placeholder: "20",
        name: "numberOfMarks",
        type: "number",
        required: false,
      },
      {
        label: "Day of the exam",
        placeholder: "Monday",
        name: "dayOfTheExam",
        type: "text",
        required: false,
      },
      {
        label: "Date of the exam",
        placeholder: "12-4-2023",
        name: "dateOfTheExam",
        type: "text",
        required: false,
      },
      {
        label: "Duration in hours",
        placeholder: "2 hours",
        name: "durationInHours",
        type: "number",
        required: false,
      },
    ],
  },
];

const InstatuteData = [
  {
    label: "School/College Name",
    placeholder: "Harvard",
    type: "text",
    name: "instatuteName",
  },
  {
    label: "Country",
    placeholder: "Harvard",
    type: "text",
    name: "country",
  },
  {
    label: "State Deparment Name",
    placeholder: "New york",
    type: "text",
    name: "stateDepartmentName",
  },
  {
    label: "Ministry / Department name",
    placeholder: "12 grade",
    type: "text",
    name: "countryDepartmentName",
  },
  {
    label: "Teacher's Name",
    placeholder: "20",
    type: "text",
    name: "teacherName",
  },
  {
    label: "Logo",
    placeholder: "School logo",
    type: "file",
    name: "logo",
  },
];

const DocumentDetails = [
  {
    label: "subject",
    placeholder: "history",
    name: "subject",
    type: "text",
    required: true,
  },
  {
    label: "Term / Semester",
    placeholder: "Second",
    name: "termSemester",
    type: "text",
    required: true,
  },
  {
    label: "Class",
    placeholder: "12 grade",
    name: "class",
    type: "text",
    required: true,
  },
  {
    label: "Type",
    placeholder: "Final",
    name: "type",
    type: "text",
    required: true,
  },
  {
    label: "Number of Marks",
    placeholder: "20",
    name: "numberOfMarks",
    type: "number",
    required: false,
  },
  {
    label: "Day of the exam",
    placeholder: "Monday",
    name: "dayOfTheExam",
    type: "text",
    required: false,
  },
  {
    label: "Date of the exam",
    placeholder: "12-4-2023",
    name: "dateOfTheExam",
    type: "text",
    required: false,
  },
  {
    label: "Duration in hours",
    placeholder: "2 hours",
    name: "durationInHours",
    type: "number",
    required: false,
  },
];

const Control = ({ activeControl, setActiveControl }: any) => {
  return (
    <>
      <div className="w-full overflow-y-scroll lg:w-1/2">
        <div className="flex cursor-pointer items-baseline gap-1">
          <SectionHeader>Header</SectionHeader>
          <Paragraph>3 sections</Paragraph>
        </div>
        <Spacer y={3} />
        <section className="flex flex-col">
          {headerInfo.map((item, i) => {
            return (
              <div key={i}>
                <ControlAccordion
                  i={i}
                  label={item.label}
                  name={name}
                  content={item.content}
                />
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Control;

type ControlAccordionType = {
  label: String;
  name: any;
  i: number;
  content: any;
};

function ControlAccordion({ label, i, name, content }: ControlAccordionType) {
  const { QuizFormHeaderDetails, handleInputsChange } = useQuizHeaderStore();

  const [inputData, setInputData] = useState<String>();
  const inputRef = useRef<HTMLInputElement>(null);
  function focusOnInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <Accordion variant="splitted" className="__accordion-btn">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        onPress={focusOnInput}
        className="__shadow-none"
        classNames={{
          startContent: "h-10 w-10 shadow-none",
          title: "text-sm font-medium",
        }}
        title={label}
        startContent={
          <Card className="size-full rounded-md bg-secondary">
            <Text className="my-auto font-bold">{i + 1}</Text>
          </Card>
        }
      >
        <section className="flex flex-col gap-2">
          {content.map(
            (input: {
              name: React.Key | null | undefined;
              label:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
            }) => {
              return (
                <div className="flex flex-col gap-[2px]" key={input.name}>
                  <Text>{input.label}</Text>
                  <Input
                    ref={inputRef}
                    labelPlacement="outside"
                    variant="bordered"
                    name={input.name as string}
                    onChange={(e) => handleInputsChange(e)}
                    value={inputData as string}
                  ></Input>
                </div>
              );
            },
          )}
        </section>
      </AccordionItem>
    </Accordion>
  );
}
