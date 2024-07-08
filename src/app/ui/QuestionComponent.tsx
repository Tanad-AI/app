/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Card,
  Checkbox,
  Input,
  Textarea,
  Tooltip,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Text, TinyText } from "../lib/TextComponents";
import CustomAccordion from "./CustomAccordion";
import { Trash } from "lucide-react";
import { useQuizStore } from "../store/QuizState";
import { AnimatePresence, motion } from "framer-motion";
import {
  choiceType,
  QuestionType,
  SectionsData,
} from "../types/document-elements.types";
import QuestionsModal from "./QuestionModal";

const msqsQuestion: QuestionType = {
  id: "",
  questionText: "",
  answer: "",
  placeholder: "enter a question",
  choices: [
    {
      choiceText: "",
      isTrue: false,
    },
    {
      choiceText: "",
      isTrue: false,
    },
    {
      choiceText: "",
      isTrue: false,
    },
    {
      choiceText: "",
      isTrue: true,
    },
  ],
};
const TOrFQuestion: QuestionType = {
  id: "",
  questionText: "",
  answer: "",
  placeholder: "enter a question",
  choices: [
    {
      choiceText: "",
      isTrue: false,
    },
    {
      choiceText: "",
      isTrue: false,
    },
  ],
};
const otherQuestion: QuestionType = {
  id: "",
  questionText: "",
  answer: "",
  placeholder: "enter a question",
  choices: [],
};

function QuestionsComponent() {
  const {
    questionsSections,
    numberOfQuestions,
    setNumberOfQuestions,
    addQuestions,
    setQuestionsText,
    setChoicesText,
    SectionQuestion,
    setSectionQuestion,
    setNewQuestions,
  } = useQuizStore();
  const [isThereQuestions, setIsThereQuestions] = useState<boolean>(false);

  const handleQuestionsInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setNumberOfQuestions({ [name]: value });
  };

  const handleAddingQuestions = () => {
    const mcqsQuestion = msqsQuestion;
    const otherQuestions = otherQuestion;
    setIsThereQuestions(true);
    addQuestions(mcqsQuestion, otherQuestions, TOrFQuestion);
  };

  function handleQuestionTextareaChange(
    e: React.ChangeEvent<HTMLInputElement>,
    sectionIndex: number,
    questionIndex: number,
  ) {
    setQuestionsText(sectionIndex, questionIndex, e.target.value);
  }

  function handleDeletingQuestion(id: string, sectionIndex: number) {
    const updatedQuestions = questionsSections[sectionIndex].questions.filter(
      (question: { id: string }) => question.id !== id,
    );
    setNewQuestions(updatedQuestions, sectionIndex);
    console.log(questionsSections);
  }

  return (
    <div className="flex flex-col gap-2">
      <section className="flex items-baseline gap-1">
        <Text>Questions</Text>
      </section>
      <Card
        radius="sm"
        shadow="none"
        className={`flex min-h-full flex-col pb-8 pt-4 ${
          !isThereQuestions && "hidden"
        }`}
      >
        {questionsSections &&
          questionsSections.map((section: any, index: number) => (
            <div key={index}>
              {section.questions.length === 0 ? (
                <></>
              ) : (
                <>
                  {index == 0 ? (
                    <></>
                  ) : (
                    <div className="mt-2 h-3 w-full bg-[#FAE9DF]"></div>
                  )}
                  <div className={`space-y-2 px-3 ${index !== 0 && "pt-3"}`}>
                    <div className="flex items-baseline gap-2">
                      <Text>{section.title}</Text>
                      <TinyText>{section.questions.length} questions</TinyText>
                    </div>
                    <div>
                      <Input
                        size="sm"
                        value={SectionQuestion[section.name].text}
                        variant="bordered"
                        onChange={(e) =>
                          setSectionQuestion(
                            section.name,
                            e.target.value,
                            "text",
                          )
                        }
                        className=""
                        classNames={{
                          inputWrapper: "h-0",
                        }}
                      ></Input>
                    </div>
                  </div>
                  <div className="mt-2 h-[1.5px] w-full bg-[#FAE9DF]"></div>
                </>
              )}
              <div>
                {section.questions &&
                  section.questions.map((question: QuestionType, i: number) => {
                    return (
                      <AnimatePresence key={i}>
                        <motion.div
                          key={section.questions}
                          initial={{
                            opacity: 0,
                            y: 56,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.2, duration: 0.2 },
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <CustomAccordion
                            index={i + 1}
                            title={
                              question.questionText == ""
                                ? "Click to enter a question"
                                : question.questionText
                            }
                          >
                            <div className="flex flex-col gap-4">
                              <section className="flex justify-end space-x-3">
                                <Tooltip
                                  size="sm"
                                  radius="sm"
                                  delay={100}
                                  content="Delete Question"
                                >
                                  <Button
                                    isIconOnly
                                    size="sm"
                                    onClick={() =>
                                      handleDeletingQuestion(question.id, index)
                                    }
                                    className="flex items-center justify-center rounded-full border-3 border-red-600/10 bg-red-100 "
                                    startContent={
                                      <Trash
                                        size={14}
                                        className="stroke-red-500"
                                      />
                                    }
                                  ></Button>
                                </Tooltip>
                              </section>
                              <section>
                                <Textarea
                                  variant="bordered"
                                  placeholder="Enter your Question"
                                  value={question.questionText}
                                  onChange={(e) =>
                                    handleQuestionTextareaChange(e, index, i)
                                  }
                                  classNames={{
                                    input: "resize-y min-h-32",
                                  }}
                                />
                              </section>
                              <section className="flex flex-col gap-4">
                                {question.choices &&
                                  question.choices.map(
                                    (choice: choiceType, idx: number) => (
                                      <div
                                        key={idx}
                                        className="flex flex-col gap-1"
                                      >
                                        <Input
                                          variant="bordered"
                                          labelPlacement="outside"
                                          label={`Choice ${idx + 1}`}
                                          placeholder="Add choice..."
                                          onChange={(e) =>
                                            setChoicesText(
                                              e.target.value,
                                              index,
                                              i,
                                              idx,
                                            )
                                          }
                                        ></Input>

                                        <Checkbox>set as true</Checkbox>
                                      </div>
                                    ),
                                  )}
                              </section>
                            </div>
                          </CustomAccordion>
                        </motion.div>
                      </AnimatePresence>
                    );
                  })}
              </div>
            </div>
          ))}
      </Card>
      <section className="flex w-full justify-center">
        <QuestionsModal
          numberOfQuestions={numberOfQuestions}
          handleAddingQuestions={handleAddingQuestions}
          handleQuestionsInputChange={handleQuestionsInputChange}
        />
      </section>
    </div>
  );
}

export default QuestionsComponent;
