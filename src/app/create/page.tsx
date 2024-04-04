/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
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
import { QuizDetailsFormTypes } from "./lib/formsTypes";

const page = () => {
  const [quizDetailsFormData, setQuizDetailsFormData] =
    useState<QuizDetailsFormTypes>({
      subject: "",
      termSemester: "",
      class: "",
      numberOfmarks: null,
      dayOfTheExam: "",
      dateOfTheExam: "",
      durationInHours: null,
      type: "",
    });

  console.log(quizDetailsFormData);
  return (
    <section className="mx-auto w-full md:w-[60%] md:translate-y-[-56px]">
      <br />
      <StepperWrapper>
        <div className="mt-4 flex h-full w-full flex-col items-center justify-center gap-3">
          <StepOne />
        </div>
        <div className="mt-4 flex h-full w-full flex-col items-center justify-center gap-3">
          <QuizDetailsStep setQuizDetailsFormData={setQuizDetailsFormData} />
        </div>
        <div className="mt-4 flex h-full w-full flex-col items-center justify-center gap-3">
          <EnterIntatuteDetails />
        </div>
        <div className="mt-4 flex h-full w-full flex-col items-center justify-center gap-3">
          <QuestionsDetails />
        </div>
        <div className="mt-4 flex h-full w-full flex-col items-center justify-center gap-3">
          <SectionHeader>
            Please upload your screenshots here, make sure you follow the
            instructions for best results
          </SectionHeader>
          <Card className="__box flex size-64 flex-col items-center justify-around">
            <section className="mx-auto flex size-12 items-center justify-between rounded-full bg-orange-600/20">
              <UploadCloud className="mx-auto stroke-orange-600" />
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
    <div className="flex  w-full flex-col items-center gap-3">
      <section className="mb-4 text-center">
        <SectionHeader>Choose the type of document</SectionHeader>
        <Paragraph>
          This is going to be the type of document the AI will generate
        </Paragraph>
      </section>
      <section className="flex w-full flex-row  items-center justify-center gap-6">
        <Card
          isHoverable
          isPressable
          isBlurred
          className="flex size-32 cursor-pointer  justify-around border-[1px] border-orange-600 bg-orange-600/5 md:size-36 dark:bg-orange-600/5"
        >
          <div className="mx-auto flex size-12 items-center justify-between rounded-full bg-orange-600/20">
            <File className="mx-auto stroke-orange-600" />
          </div>
          <div className="mx-auto">
            <SubHeader>Quiz</SubHeader>
          </div>
        </Card>
        <Card
          isHoverable
          isPressable
          isBlurred
          className="flex size-32 cursor-pointer justify-around border-[1px] border-orange-600 bg-orange-600/5 md:size-36 dark:bg-orange-600/5"
        >
          <div className="mx-auto flex size-12 items-center justify-between rounded-full bg-orange-600/20">
            <ScrollText className="mx-auto stroke-orange-600" />
          </div>
          <div className="mx-auto">
            <SubHeader>Worksheet</SubHeader>
          </div>
        </Card>
      </section>
    </div>
  );
}

function QuizDetailsStep({ setQuizDetailsFormData }: any) {
  const Inputs = [
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
      name: "numberOfmarks",
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
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuizDetailsFormData((prev: QuizDetailsFormTypes) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div>
      <section className="mb-8 text-center">
        <SectionHeader>
          Please provide some details about the quiz
          <Paragraph>
            this information will be display in the quiz hidder
          </Paragraph>
        </SectionHeader>
      </section>

      <section className="flex w-full justify-between gap-4 capitalize">
        <form className="grid w-full grid-flow-col  grid-rows-4  gap-6 md:grid-rows-3 md:gap-4">
          {Inputs.map((input) => {
            return (
              <>
                <Input
                  isRequired={input.required}
                  variant={"bordered"}
                  labelPlacement="outside"
                  label={input.label}
                  placeholder={input.placeholder}
                  key={input.label}
                  name={input.name}
                  onChange={(e) => handleChange(e)}
                  type={input.type}
                  className="required:border-red-500"
                />
              </>
            );
          })}
        </form>
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
      <section className="mb-8 text-center">
        <SectionHeader>Enter the school/college details</SectionHeader>
        <Paragraph>
          Again this information will be displayed in the document header
        </Paragraph>
      </section>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="grid grid-flow-col grid-rows-2 gap-4">
          {Inputs.slice(0, 4).map((input) => {
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
        </section>
        <section className="h-full  ">
          {Inputs.slice(4, 5).map((input) => {
            return (
              <>
                <p className="mb-1 text-sm">{input.label}</p>
                <Card
                  className="__box flex h-full flex-row items-center  justify-around lg:h-[84%]"
                  key={input.label}
                >
                  <section className="flex flex-col items-center">
                    <span className="flex size-12 flex-col items-center justify-between rounded-full bg-orange-600/20">
                      <UploadCloud className="my-auto stroke-orange-600" />
                    </span>
                    <Text>Drag and Drop</Text>
                  </section>
                  <section className="flex flex-col items-center">
                    <Paragraph>Or</Paragraph>
                    <Button
                      size="sm"
                      className="bg-orange-600 text-white"
                      variant="shadow"
                    >
                      Browse Files
                    </Button>
                  </section>
                </Card>
              </>
            );
          })}
        </section>
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
    {
      label: "define",
      placeholder: "0",
    },
    {
      label: "count",
      placeholder: "0",
    },
  ];
  return (
    <>
      <section className="mb-8 text-center">
        <SectionHeader>
          Please provide some information about the question
        </SectionHeader>
        <Paragraph>Based on this info the AI will write the document</Paragraph>
      </section>

      <div className="grid w-full grid-flow-col grid-rows-2 gap-4">
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
