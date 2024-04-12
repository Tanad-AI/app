"use client";
import { useQuizHeaderStore } from "@/app/lib/store/QuizState";
import {
  Paragraph,
  SectionHeader,
  SubHeader,
  Text,
  TinyText,
} from "@/app/lib/TextComponents";
import { Accordion, AccordionItem, Card, Input } from "@nextui-org/react";
import { Pencil } from "lucide-react";
import React, { ReactNode, useRef } from "react";
const InstatuteData = [
  {
    label: "School/College Name",
    placeholder: "Harvard",
    type: "text",
    name: "instatuteName",
  },
  {
    label: "State Deparment Name",
    placeholder: "New yor",
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

const Control = ({ activeControl, setActiveControl }: any) => {
  const { QuizFormHeaderDetails, handleInputsChange } = useQuizHeaderStore();
  return (
    <>
      <div className="w-1/2 overflow-y-scroll">
        <div className="flex cursor-pointer items-baseline gap-1">
          <SectionHeader>Header</SectionHeader>
          <Paragraph>3 sections</Paragraph>
        </div>
        <section className="flex flex-col gap-2">
          <Text>Instatute information</Text>
          {InstatuteData.map((instatute, i) => (
            <ControlAccordion
              key={instatute.name}
              value={instatute.name}
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
  value: String;
  label: String;
  i: ReactNode;
};

function ControlAccordion({ value, label, i }: ControlAccordionType) {
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
        classNames={{
          base: "rounded-none",
          startContent: "h-10 w-10",
          title: "text-sm font-medium",
        }}
        title={value}
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
            value={value as string}
          ></Input>
        </section>
      </AccordionItem>
    </Accordion>
  );
}
