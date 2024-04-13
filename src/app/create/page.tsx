/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import Upload from "rc-upload";
import {
  Paragraph,
  SectionHeader,
  SubHeader,
  Text,
} from "../lib/TextComponents";
import { Button, Card, Input, Spacer } from "@nextui-org/react";
import { File, ScrollText, UploadCloud } from "lucide-react";
import StepperWrapper from "../ui/StepperWrapper";
import {
  InstatuteDetailsFromType,
  questionsDetailsFormTypes,
  QuizDetailsFormTypes,
} from "./lib/formsTypes";
import { useDropzone } from "react-dropzone";
import { useQuizHeaderStore } from "../lib/store/QuizState";
import { useRouter } from "next/navigation";

const page = () => {
  const [instatuteDetails, setInstatuteDetails] =
    useState<InstatuteDetailsFromType>({
      instatuteName: "",
      countryDepartmentName: "",
      stateDepartmentName: "",
      teacherName: "",
      logo: [],
    });
  const [questionsDetails, setQuestionsDetails] =
    useState<questionsDetailsFormTypes>({
      numberOfQuestions: null,
      questionsLanguage: "",
      MCQs: null,
      trueOrFalse: null,
      fillInTheBlank: null,
      defineThefollowing: null,
      writeShortAnswer: null,
    });
  const updateQuizHeaderData = useQuizHeaderStore(
    (state) => state.handleInputsChange,
  );

  const formData = useQuizHeaderStore((state) => state.QuizFormHeaderDetails);
  const route = useRouter();

  return (
    <section className="mx-auto w-full md:w-[60%] md:translate-y-[-56px]">
      <br />
      <StepperWrapper>
        <div className="mt-4 flex h-full w-full flex-col items-center justify-center gap-3">
          <StepOne />
        </div>
        <div className="mt-4 flex h-full w-full flex-col items-center justify-center gap-3">
          <QuizDetailsStep
            formData={formData}
            updateQuizHeaderData={updateQuizHeaderData}
          />
        </div>
        <div className="mt-4 flex h-full w-full flex-col items-center justify-center gap-3">
          <EnterInstatuteDetails
            instatuteDetails={instatuteDetails}
            setInstatuteDetails={setInstatuteDetails}
            formData={formData}
            updateQuizHeaderData={updateQuizHeaderData}
          />
        </div>
        <div className="mt-4 flex h-full w-full flex-col items-center justify-center gap-3">
          <QuestionsDetails
            questionsDetails={questionsDetails}
            setQuestionsDetails={setQuestionsDetails}
          />
        </div>
        <Button onClick={() => route.push("/")}>redirect</Button>

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

function QuizDetailsStep({ formData, updateQuizHeaderData }: any) {
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
              <Input
                isRequired={input.required}
                variant="bordered"
                labelPlacement="outside"
                label={input.label}
                placeholder={input.placeholder}
                key={input.label}
                name={input.name}
                type={input.type}
                onChange={(e) => updateQuizHeaderData(e)}
                value={formData[input.name]}
              />
            );
          })}
        </form>
      </section>
    </div>
  );
}

function EnterInstatuteDetails({
  formData,
  updateQuizHeaderData,
  instatuteDetails,
  setInstatuteDetails,
}: any) {
  const Inputs = [
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
  const fileInputRef = useRef<any>();
  const [logoFileData, setLogoFileData] = useState<any>([]);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInstatuteDetails((prev: InstatuteDetailsFromType) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  const onDrop = useCallback((acceptedFiles: any) => {
    setLogoFileData(acceptedFiles);
    // updateQuizHeaderData();
    setInstatuteDetails((prev: InstatuteDetailsFromType) => ({
      ...prev,
      logo: acceptedFiles,
    }));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <>
      <section className="mb-8 text-center">
        <SectionHeader>Enter the school/college details</SectionHeader>
        <Paragraph>
          Again this information will be displayed in the document header
        </Paragraph>
      </section>
      <div className="grid grid-cols-1 gap-4 ">
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
                value={formData[input.name]}
                onChange={(e) => updateQuizHeaderData(e)}
                name={input.name}
              />
            );
          })}
        </section>
        <section className="h-full  ">
          {Inputs.slice(4, 5).map((input) => {
            return (
              <>
                <p className="mb-2 text-sm">{input.label}</p>
                <div
                  className="__box  flex h-full flex-row items-center justify-around"
                  onClick={() => fileInputRef.current.click()}
                  {...getRootProps()}
                >
                  <input
                    hidden
                    key={input.label}
                    className="file-input"
                    type={input.type}
                    accept="image/*"
                    {...getInputProps()}
                    ref={fileInputRef}
                  />
                  <section className="flex flex-col items-center">
                    <span className="flex size-12 flex-col items-center justify-between rounded-full bg-orange-600/20">
                      <UploadCloud className="my-auto stroke-orange-600" />
                    </span>
                    {logoFileData.length !== 0 ? (
                      logoFileData[0].name
                    ) : isDragActive ? (
                      <Text>Drop the files here ...</Text>
                    ) : (
                      <Text>Drag and Drop</Text>
                    )}
                  </section>
                  <section className="flex flex-col items-center">
                    <Paragraph>Or</Paragraph>
                    <Button
                      size="sm"
                      className="bg-orange-600 text-white"
                      variant="shadow"
                      onPress={() => fileInputRef.current.click()}
                    >
                      Browse Files
                    </Button>
                  </section>
                </div>
              </>
            );
          })}
        </section>
      </div>
    </>
  );
}

function QuestionsDetails({ questionsDetails, setQuestionsDetails }: any) {
  const Inputs = [
    {
      label: "Number of question",
      placeholder: "0",
      type: "number",
      name: "numberOfQuestions",
    },
    {
      label: "Questions Language",
      placeholder: "English",
      type: "Text",
      name: "questionsLanguage",
    },
    {
      label: "MSQs",
      placeholder: "0",
      type: "number",
      name: "MCQs",
    },
    {
      label: "True or false",
      placeholder: "0",
      type: "number",
      name: "trueOrFalse",
    },
    {
      label: "fill in the blank",
      placeholder: "0",
      type: "number",
      name: "fillInTheBlank",
    },
    {
      label: "define",
      placeholder: "0",
      type: "number",
      name: "defineThefollowing",
    },
    {
      label: "count",
      placeholder: "0",
      type: "number",
      name: "writeShortAnswer",
    },
  ];
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuestionsDetails((prev: InstatuteDetailsFromType) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <>
      <section className="mb-8 text-center">
        <SectionHeader>
          Please provide some information about the question
        </SectionHeader>
        <Paragraph>Based on this info the AI will write the document</Paragraph>
      </section>

      <section className="w-full ">
        <SubHeader>Question Detailes</SubHeader>
        <Spacer y={1} />

        <div className="grid grid-cols-2 gap-4">
          {Inputs.slice(0, 2).map((input) => {
            return (
              <Input
                key={input.label}
                label={input.label}
                placeholder={input.placeholder}
                name={input.name}
                variant="bordered"
                labelPlacement="outside"
                type={input.type}
                onChange={(e) => handleChange(e)}
                value={questionsDetails[input.name]}
              />
            );
          })}
        </div>
        <Spacer y={4} />
        <SubHeader>Question Detailes</SubHeader>
        <Spacer y={1} />

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {Inputs.slice(3, Inputs.length).map((input) => {
            return (
              <Input
                key={input.label}
                labelPlacement="outside"
                label={input.label}
                name={input.name}
                placeholder={input.placeholder}
                variant="bordered"
                type={input.type}
                onChange={(e) => handleChange(e)}
                value={questionsDetails[input.name]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
