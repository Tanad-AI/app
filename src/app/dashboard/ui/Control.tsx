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
import React, { useRef, useState } from "react";
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
      <div className="w-1/2 overflow-y-scroll">
        <div className="flex cursor-pointer items-baseline gap-1">
          <SectionHeader>Header</SectionHeader>
          <Paragraph>3 sections</Paragraph>
        </div>
        <Spacer y={3} />
        <section className="flex flex-col ">
          <Text>Instatute information</Text>
          {InstatuteData.map((instatute, i) => (
            <ControlAccordion
              key={instatute.name}
              name={instatute.name}
              label={instatute.label}
              i={i}
            />
          ))}
          <Spacer y={2} />
          <Text>Document details</Text>
          {DocumentDetails.map((instatute, i) => (
            <ControlAccordion
              key={instatute.name}
              name={instatute.name}
              label={instatute.label}
              i={i}
            />
          ))}
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
};

function ControlAccordion({ label, i, name }: ControlAccordionType) {
  const { QuizFormHeaderDetails, handleInputsChange } = useQuizHeaderStore();

  const [inputData, setInputData] = useState<String>();
  const inputRef = useRef<HTMLInputElement>(null);
  function focusOnInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  // function handleInputsChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setInputData(e.target.value);
  // }

  return (
    <Accordion variant="splitted" className="__accordion-btn ">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        onPress={focusOnInput}
        className="shadow-none"
        classNames={{
          base: "rounded-none ",
          startContent: "h-10 w-10",
          title: "text-sm font-medium",
        }}
        title={
          QuizFormHeaderDetails[name as keyof QuizHeaderFormDataType] ? (
            <>
              <TinyText>{label}</TinyText>
              <div>
                {QuizFormHeaderDetails[name as keyof QuizHeaderFormDataType]}
              </div>
            </>
          ) : (
            label
          )
        }
        startContent={
          <Card className="size-full rounded-md bg-secondary">
            <TinyText className="my-auto font-bold">{i + 1}</TinyText>
          </Card>
        }
      >
        <section className="flex flex-col gap-4">
          <Input
            label={label}
            labelPlacement="outside"
            ref={inputRef}
            name={name}
            onChange={(e) => handleInputsChange(e)}
            value={inputData as string}
          ></Input>
        </section>
      </AccordionItem>
    </Accordion>
  );
}
