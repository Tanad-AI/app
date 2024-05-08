import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Paragraph, SectionHeader, SubHeader } from "../lib/TextComponents";
import CustomAccordion from "./CustomAccordion";
import { PlusIcon } from "lucide-react";
const msqsQuestion: QuestionType = {
  questionText: "",
  answer: "",
  label: "Enter a question",
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
};
const otherQuestions: QuestionType = {
  questionText: "first question",
  answer: "",
  label: "",
  choices: [],
};
const initialSectionsData = [
  { name: "MCQs", title: "MCQs", added: false, questions: [] },
  {
    name: "trueOrFalse",
    title: "True or false",
    added: false,
    questions: [],
  },
  {
    name: "FillInTheBlank",
    title: "Fill in the blank",
    added: false,
    questions: [],
  },
];

type choiceType = {
  choiceText: string;
  isTrue: boolean;
};
type QuestionType = {
  questionText: string;
  answer: string;
  label: string;
  choices: choiceType[];
};
type SectionsData = {
  name: string;
  title: string;
  added: boolean;
  questions: QuestionType[];
};

function QuestionsComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [questionsSections, setQuestionsSection] =
    useState<SectionsData[]>(initialSectionsData);
  const [numberOfQuestions, setNumberOfQuenstions] = useState({
    MCQs: "",
    trueOrFalse: "",
    FillInTheBlank: "",
  });

  // Update the questions array of the first object

  function handleAddingQuestions() {
    setQuestionsSection((prev) => {
      const updatedPrev = [...prev];
      for (let i = 0; i < +numberOfQuestions.MCQs; i++) {
        updatedPrev[0].questions = [...updatedPrev[0].questions, msqsQuestion];
      }
      for (let i = 0; i < +numberOfQuestions.trueOrFalse; i++) {
        updatedPrev[1].questions = [
          ...updatedPrev[1].questions,
          otherQuestions,
        ];
      }
      for (let i = 0; i < +numberOfQuestions.FillInTheBlank; i++) {
        updatedPrev[2].questions = [
          ...updatedPrev[2].questions,
          otherQuestions,
        ];
      }
      return updatedPrev;
    });
    setNumberOfQuenstions({ FillInTheBlank: "", MCQs: "", trueOrFalse: "" });
  }

  return (
    <div className="flex flex-col gap-3">
      <section className="flex cursor-pointer items-baseline gap-1">
        <SectionHeader>Questions</SectionHeader>
      </section>
      <section className="flex flex-col gap-4">
        {questionsSections &&
          questionsSections.map((section, i) => (
            <div key={i}>
              {section.questions.length === 0 ? (
                <></>
              ) : (
                <div className="flex items-baseline gap-2">
                  <SubHeader>{section.title}</SubHeader>
                  <Paragraph>{section.questions.length} questions</Paragraph>
                </div>
              )}

              {section.questions &&
                section.questions.map((question, i) => (
                  <CustomAccordion
                    key={i}
                    index={i + 1}
                    title={question.questionText}
                  >
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
                          question.choices.map((choice: choiceType, i) => (
                            <div key={i} className="flex flex-col gap-1">
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
                      value={numberOfQuestions.MCQs}
                      onChange={(e) =>
                        setNumberOfQuenstions({
                          ...numberOfQuestions,
                          MCQs: e.target.value,
                        })
                      }
                      min={0}
                      type="number"
                    ></Input>
                    <Input
                      labelPlacement="outside"
                      variant="bordered"
                      label="True or false questions"
                      placeholder="0"
                      value={numberOfQuestions.FillInTheBlank}
                      onChange={(e) =>
                        setNumberOfQuenstions({
                          ...numberOfQuestions,
                          FillInTheBlank: e.target.value,
                        })
                      }
                      min={0}
                      type="number"
                    ></Input>
                    <Input
                      labelPlacement="outside"
                      variant="bordered"
                      label="Fill in the black questions"
                      placeholder="0"
                      value={numberOfQuestions.trueOrFalse}
                      onChange={(e) =>
                        setNumberOfQuenstions({
                          ...numberOfQuestions,
                          trueOrFalse: e.target.value,
                        })
                      }
                      min={0}
                      type="number"
                    ></Input>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button
                    color="primary"
                    onPress={onClose}
                    onClick={() => handleAddingQuestions()}
                  >
                    Add
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

export default QuestionsComponent;
