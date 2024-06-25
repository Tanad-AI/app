/* eslint-disable react/jsx-key */
"use client";
import { useQuizStore } from "@/app/store/QuizState";
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
import React, { useEffect, useRef, useState } from "react";

import QuestionsComponent from "@/app/ui/QuestionComponent";

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

const currentView = [<HeaderComponent />, <QuestionsComponent />];

const Control = ({ activeControlView, setActiveControlView }: any) => {
  return (
    <>
      <div className="w-full overflow-y-scroll  pb-10 lg:w-1/2">
        {currentView[activeControlView]}
      </div>
    </>
  );
};

export default Control;

type ControlAccordionType = {
  label: string;
  name: string;
  content: ContentType[];
};
type ContentType = {
  label: string;
  name: string;
};
type PropsType = {
  label: string;
  name: string;
  content: ContentType[];
  i: number;
};
function ControlAccordion({ label, name, content, i }: PropsType) {
  const { QuizFormHeaderDetails, handleInputsChange } = useQuizStore();

  const [inputData, setInputData] = useState<String>();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Accordion variant="splitted" className="__accordion-btn">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        // onPress={focusOnInput}
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
          {content.map((input) => {
            return (
              <div className="flex flex-col gap-[2px]" key={input.name}>
                <Text>{input.label}</Text>
                <Input
                  ref={inputRef}
                  labelPlacement="outside"
                  placeholder="ادخل التفاصيل"
                  className="placeholder-slate-500"
                  variant="bordered"
                  name={input.name as string}
                  onChange={(e) => handleInputsChange(e)}
                  value={inputData as string}
                ></Input>
              </div>
            );
          })}
        </section>
      </AccordionItem>
    </Accordion>
  );
}

function HeaderComponent() {
  return (
    <>
      <div className="flex cursor-pointer items-baseline gap-1">
        <Text>Header</Text>
        <TinyText>3 sections</TinyText>
      </div>
      <Spacer y={2} />
      <Card radius="sm" className="flex min-h-full flex-col pb-8">
        {headerInfo.map((item, i) => {
          return (
            <div key={i}>
              <ControlAccordion
                i={i}
                label={item.label}
                name={item.name}
                content={item.content}
              />
            </div>
          );
        })}
      </Card>
    </>
  );
}
