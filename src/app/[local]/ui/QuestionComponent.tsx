/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Card, Input, Textarea, Tooltip } from "@nextui-org/react";
import React from "react";
import { Text, TinyText } from "../lib/TextComponents";
import CustomAccordion from "./CustomAccordion";
import { Trash } from "lucide-react";
import { useQuizStore } from "../store/QuizState";
import { AnimatePresence, motion } from "framer-motion";
import { choiceType, QuestionType } from "../types/document-elements.types";
import QuestionsModal from "./QuestionModal";
import { useTranslations } from "next-intl";

function QuestionsComponent() {
  const {
    numberOfQuestions,
    setNumberOfQuestions,
    setQuestionsText,
    setChoicesText,
    SectionQuestion,
    setSectionQuestion,
    setNewQuestions,
  } = useQuizStore();

  const examQuestionsSections = useQuizStore(
    (state) => state.examQuestionsSections,
  );
  const setChoiceAsTrue = useQuizStore((state) => state.setChoiceAsTrue);
  const t = useTranslations("Create");

  const handleQuestionsInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setNumberOfQuestions({ [name]: value });
  };

  function handleQuestionTextareaChange(
    e: React.ChangeEvent<HTMLInputElement>,
    sectionIndex: number,
    questionIndex: number,
  ) {
    setQuestionsText(sectionIndex, questionIndex, e.target.value);
  }

  function handleDeletingQuestion(id: string, sectionIndex: number) {
    const updatedQuestions = examQuestionsSections[
      sectionIndex
    ].questions.filter((question: { id: string }) => question.id !== id);
    setNewQuestions(updatedQuestions, sectionIndex);
  }

  return (
    <div className="flex flex-col gap-2">
      <section className="flex items-baseline gap-1">
        <Text>{t("questions")}</Text>
      </section>
      <Card
        radius="sm"
        shadow="none"
        className={`flex flex-col pb-8 pt-4 ${
          examQuestionsSections.length == 0 && "hidden"
        }`}
      >
        {examQuestionsSections &&
          examQuestionsSections.map((section: any, index: number) => {
            const sectionName: "MCQs" | "trueOrFalse" | "fillInTheBlank" =
              section.name;
            return (
              <div key={section.name}>
                {section.questions.length === 0 ? (
                  <></>
                ) : (
                  <>
                    <div className={`space-y-2 px-3 ${index !== 0 && "pt-3"}`}>
                      <div className="flex items-baseline gap-2">
                        <Text>{section.title}</Text>
                        <TinyText>
                          {section.questions.length} {t("questionsDuplicate")}
                        </TinyText>
                      </div>
                      <div>
                        <Input
                          size="sm"
                          value={SectionQuestion[sectionName].text}
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
                    section.questions.map(
                      (question: QuestionType, i: number) => {
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
                                    ? t("clickToEnterQuestion")
                                    : question.questionText
                                }
                              >
                                <div className="flex flex-col gap-4">
                                  <section className="flex justify-end space-x-3">
                                    <Tooltip
                                      size="sm"
                                      radius="sm"
                                      delay={100}
                                      content={t("deleteQuestion")}
                                    >
                                      <Button
                                        isIconOnly
                                        size="sm"
                                        onClick={() =>
                                          handleDeletingQuestion(
                                            question.id,
                                            index,
                                          )
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
                                      placeholder={question.placeholder}
                                      value={question.questionText}
                                      onChange={(e) =>
                                        handleQuestionTextareaChange(
                                          e,
                                          index,
                                          i,
                                        )
                                      }
                                      classNames={{
                                        input: "resize-y min-h-32",
                                      }}
                                    />
                                  </section>
                                  <section className="flex flex-col gap-4">
                                    {question.choices &&
                                      question.choices.map(
                                        (
                                          choice: choiceType,
                                          choiceIdx: number,
                                        ) => (
                                          <div
                                            key={choiceIdx}
                                            className="flex flex-col gap-1"
                                          >
                                            <Input
                                              variant="bordered"
                                              labelPlacement="outside"
                                              label={`${t("choice")} ${
                                                choiceIdx + 1
                                              }`}
                                              placeholder={choice.choiceText}
                                              onChange={(e) =>
                                                setChoicesText(
                                                  e.target.value,
                                                  index,
                                                  i,
                                                  choiceIdx,
                                                )
                                              }
                                            ></Input>
                                            <div className="flex  items-center gap-1">
                                              <input
                                                type="radio"
                                                id={`${choiceIdx}${question.id}`}
                                                name={section.questions[i].id}
                                                title={t("setAsTrue")}
                                                onChange={(e) => {
                                                  setChoiceAsTrue(
                                                    e.target.checked,
                                                    question.id,
                                                    choiceIdx,
                                                    sectionName,
                                                  );
                                                  console.log(question.choices);
                                                }}
                                                className="cursor-pointer"
                                              />
                                              <label
                                                className="cursor-pointer"
                                                htmlFor={`${choiceIdx}${question.id}`}
                                              >
                                                {t("setAsTrue")}
                                              </label>
                                            </div>
                                          </div>
                                        ),
                                      )}
                                  </section>
                                </div>
                              </CustomAccordion>
                            </motion.div>
                          </AnimatePresence>
                        );
                      },
                    )}
                </div>
              </div>
            );
          })}
      </Card>
      <section className="flex w-full justify-center">
        <QuestionsModal
          numberOfQuestions={numberOfQuestions}
          handleQuestionsInputChange={handleQuestionsInputChange}
        />
      </section>
    </div>
  );
}

export default QuestionsComponent;
