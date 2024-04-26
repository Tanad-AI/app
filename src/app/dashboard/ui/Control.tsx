/* eslint-disable react/jsx-key */
"use client";

import { QuizHeaderFormDataType } from "@/app/create/lib/formsTypes";
import { useQuizHeaderStore } from "@/app/lib/store/QuizState";
import {
  Paragraph,
  SectionHeader,
  SubHeader,
  Text,
  TinyText,
} from "@/app/lib/TextComponents";
import {
  Accordion,
  AccordionItem,
  Card,
  Input,
  Spacer,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
  Checkbox,
} from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import CustomAccordion from "@/app/ui/CustomAccordion";

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
      <div className="w-full overflow-y-scroll pb-32 lg:w-1/2">
        {currentView[activeControlView]}
      </div>
    </>
  );
};

export default Control;

type ControlAccordionType = {
  label: String;
  name: string;
  i: number;
  content: any;
};

function ControlAccordion({ label, i, name, content }: ControlAccordionType) {
  const { QuizFormHeaderDetails, handleInputsChange } = useQuizHeaderStore();

  const [inputData, setInputData] = useState<String>();
  const inputRef = useRef<HTMLInputElement>(null);
  // function focusOnInput() {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }

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
                    placeholder="ادخل التفاصيل"
                    className="placeholder-slate-500"
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

function HeaderComponent() {
  return (
    <>
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
                name={item.name}
                content={item.content}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}

function QuestionsComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const QuestionsSections = [
    {
      name: "MCQs",
      title: "MCQs ",
      questions: [
        {
          questionText: "first question",
          answer: "",
          choices: [
            {
              choiceText: "first Choice",
              isTrue: false,
            },
            {
              choiceText: "second Choice",
              isTrue: false,
            },
            {
              choiceText: "third Choice",
              isTrue: false,
            },
            {
              choiceText: "Fourth Choice",
              isTrue: true,
            },
          ],
        },
        {
          questionText: "second question",
          answer: "",
          choices: [
            {
              choiceText: "first Choice",
              isTrue: false,
            },
            {
              choiceText: "second Choice",
              isTrue: false,
            },
            {
              choiceText: "third Choice",
              isTrue: false,
            },
            {
              choiceText: "Fourth Choice",
              isTrue: true,
            },
          ],
        },
      ],
    },
    {
      name: "True or false",
      title: "True or false ",
      questions: [
        {
          questionText: "first question",
          answer: "",
          choices: [],
        },
        {
          questionText: "second question",
          answer: "",
          choices: [],
        },
      ],
    },
    {
      name: "Fill in the blank",
      title: "Fill in the blank ",
      questions: [
        {
          questionText: "first question",
          answer: "",
          choices: [],
        },
        {
          questionText: "second question",
          answer: "",
          choices: [],
        },
      ],
    },
  ];
  type choiceType = {
    choiceText: string;
    isTrue: boolean;
  };
  return (
    <div className="flex flex-col gap-3">
      <section className="flex cursor-pointer items-baseline gap-1">
        <SectionHeader>Questions</SectionHeader>
        <Paragraph>3 sections</Paragraph>
      </section>
      <section className="flex flex-col gap-4">
        {QuestionsSections.map((section, i) => (
          <div>
            <div className="flex items-baseline gap-2">
              <SubHeader>{section.title}</SubHeader>
              <Paragraph>3 questions</Paragraph>
            </div>
            {section.questions.map((question, i) => (
              <CustomAccordion index={i + 1} title={question.questionText}>
                <div className="flex flex-col gap-4">
                  <section>
                    <Textarea
                      variant="bordered"
                      placeholder="Enter your Question"
                      classNames={{
                        input: "resize-y min-h-32",
                      }}
                    />
                  </section>
                  <section className="flex flex-col gap-4">
                    {question.choices &&
                      question.choices.map((choice: choiceType) => (
                        <div className="flex flex-col gap-1">
                          <Input
                            variant="bordered"
                            labelPlacement="outside"
                            label={choice.choiceText}
                            placeholder="enter your choice..."
                          ></Input>

                          <Checkbox>set as true</Checkbox>
                        </div>
                      ))}
                  </section>
                </div>
              </CustomAccordion>
            ))}
          </div>
        ))}
      </section>
      <section className="flex w-full justify-center">
        <Button onPress={onOpen} color="primary" size="sm">
          <PlusIcon size={16} /> Add Questions
        </Button>

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Add Questions
                </ModalHeader>
                <ModalBody>
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      labelPlacement="outside"
                      variant="bordered"
                      label="MSQs questions"
                      placeholder="0"
                      min={0}
                      type="number"
                    ></Input>
                    <Input
                      labelPlacement="outside"
                      variant="bordered"
                      label="True or false questions"
                      placeholder="0"
                      min={0}
                      type="number"
                    ></Input>
                    <Input
                      labelPlacement="outside"
                      variant="bordered"
                      label="Fill in the black questions"
                      placeholder="0"
                      min={0}
                      type="number"
                    ></Input>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </div>
  );
}
