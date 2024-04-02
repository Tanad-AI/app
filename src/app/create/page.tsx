"use client";
import React from "react";
import Upload from "rc-upload";
import {
  Paragraph,
  SectionHeader,
  SubHeader,
  Text,
} from "../lib/TextComponents";
import { Button, Card, Input } from "@nextui-org/react";
import { File, ScrollText, UploadCloud } from "lucide-react";
import StepperWrapper from "../ui/StepperWrapper";

const page = () => {
  return (
    <section className="w-full md:w-[60%] mx-auto">
      <StepperWrapper>
        <StepOne />
        <div className="w-full mt-3 flex flex-col items-center gap-3">
          <QuizDetailsStep />
        </div>
        <div className="w-full mt-3 flex flex-col items-center gap-3">
          <EnterIntatuteDetails />
        </div>
        <div className="w-full mt-3 flex flex-col items-center gap-3">
          <QuestionsDetails />
        </div>
        <div className="w-full mt-3 flex flex-col items-center gap-3">
          <Card className="size-64 __box flex flex-col justify-around items-center">
            <section className="bg-orange-600/20 rounded-full mx-auto flex items-center justify-between size-12">
              <UploadCloud className="stroke-orange-600 mx-auto" />
            </section>
            <section className="flex flex-col items-center">
              <SubHeader>Drag and Drop</SubHeader>
              <Paragraph>Or</Paragraph>
              <Button className="bg-orange-600 text-white" variant="shadow">
                Browse Files
              </Button>
            </section>
          </Card>
        </div>
      </StepperWrapper>
    </section>
  );
};

export default page;

function StepOne({}) {
  return (
    <div className="w-full mt-3 flex flex-col items-center gap-3">
      <SectionHeader>Choose the type of document</SectionHeader>
      <section className="flex gap-6">
        <Card
          isHoverable
          isBlurred
          className="border-[1px] cursor-pointer border-orange-600 size-36 bg-orange-600/5 dark:bg-orange-600/5 flex justify-around"
        >
          <div className="bg-orange-600/20 rounded-full mx-auto flex items-center justify-between size-12">
            <File className="stroke-orange-600 mx-auto" />
          </div>
          <div className="mx-auto">
            <SubHeader>Quiz</SubHeader>
          </div>
        </Card>
        <Card
          isHoverable
          isBlurred
          className="border-[1px] cursor-pointer border-orange-600 size-36 bg-orange-600/5 dark:bg-orange-600/5 flex justify-around"
        >
          <div className="bg-orange-600/20 rounded-full mx-auto flex items-center justify-between size-12">
            <ScrollText className="stroke-orange-600 mx-auto" />
          </div>
          <div className="mx-auto">
            <SubHeader>Worksheet</SubHeader>
          </div>
        </Card>
      </section>
    </div>
  );
}

function QuizDetailsStep({}) {
  const Inputs = [
    {
      label: "subject",
      placeholder: "history",
    },
    {
      label: "Term / Semester",
      placeholder: "Second",
    },
    {
      label: "Class",
      placeholder: "12 grade",
    },
    {
      label: "Number of Marks",
      placeholder: "20",
    },
    {
      label: "Day of the exam",
      placeholder: "Monday",
    },
    {
      label: "Date of the exam",
      placeholder: "12-4-2023",
    },
    {
      label: "Duration",
      placeholder: "2 hours",
    },
    {
      label: "Type",
      placeholder: "Final",
    },
  ];
  return (
    <div>
      <section className="mb-4">
        <SectionHeader>
          Please provide some details about the quiz
        </SectionHeader>
        <Paragraph>
          this information will be display in the quiz hidder
        </Paragraph>
      </section>

      <section className="flex gap-4 capitalize justify-between w-full">
        <div className="grid grid-rows-3 w-full grid-flow-col gap-4">
          {Inputs.map((input) => {
            return (
              <Input
                variant="bordered"
                labelPlacement="outside"
                label={input.label}
                placeholder={input.placeholder}
                key={input.label}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

function EnterIntatuteDetails({}) {
  const Inputs = [
    {
      label: "School/College Name",
      placeholder: "Harvard",
      type: "text",
    },
    {
      label: "Term / Semester",
      placeholder: "Second",
      type: "text",
    },
    {
      label: "Class",
      placeholder: "12 grade",
      type: "text",
    },
    {
      label: "Number of Marks",
      placeholder: "20",
      type: "text",
    },
    {
      label: "Logo",
      placeholder: "School logo",
      type: "file",
    },
  ];
  return (
    <>
      <div>
        <SectionHeader>Enter the school/college details</SectionHeader>
        <Paragraph>
          Again this information will be displayed in the document header
        </Paragraph>
      </div>
      <div className="grid grid-rows-2 w-full grid-flow-col gap-4">
        {Inputs.map((input) => {
          return (
            <Input
              key={input.label}
              label={input.label}
              placeholder={input.placeholder}
              type={input.type}
              variant="bordered"
              labelPlacement="outside"
            />
          );
        })}
      </div>
    </>
  );
}

function QuestionsDetails({}) {
  const Inputs = [
    {
      label: "Number of question",
      placeholder: "0",
    },
    {
      label: "Questions Language",
      placeholder: "English",
    },
    {
      label: "MSQs",
      placeholder: "0",
    },
    {
      label: "True or false",
      placeholder: "0",
    },
    {
      label: "Complete the blank",
      placeholder: "0",
    },
  ];
  return (
    <>
      <SectionHeader>
        Please provide some information about the question
      </SectionHeader>
      <Paragraph>Based on this info the AI will write the document</Paragraph>
      <div className="grid grid-rows-2 w-full grid-flow-col gap-4">
        {Inputs.map((input) => {
          return (
            <Input
              key={input.label}
              label={input.label}
              placeholder={input.placeholder}
              variant="bordered"
              labelPlacement="outside"
            />
          );
        })}
      </div>
    </>
  );
}
