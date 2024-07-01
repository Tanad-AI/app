/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  Card,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Text, TinyText } from "../lib/TextComponents";
import CustomAccordion from "./CustomAccordion";
import { PlusIcon, Trash } from "lucide-react";
import { useQuizStore } from "../store/QuizState";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const msqsQuestion: QuestionType = {
  id: "",
  questionText: "Click to enter a question",
  answer: "",
  placeholder: "Enter a question",
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
const otherQuestion: QuestionType = {
  id: "",
  questionText: "Click to enter a question",
  answer: "",
  placeholder: "",
  choices: [],
};

type choiceType = {
  choiceText: string;
  isTrue: boolean;
};
type QuestionType = {
  id: string;
  questionText: string;
  answer: string;
  placeholder: string;
  choices: choiceType[];
};
type SectionsData = {
  name: string;
  title: string;
  added: boolean;
  questions: QuestionType[];
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
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

  const handleQuestionsInputChange = (e: {
    target: { name: any; value: any };
  }) => {
    const { name, value } = e.target;
    setNumberOfQuestions({ [name]: value });
  };

  const handleAddingQuestions = () => {
    const mcqsQuestion = msqsQuestion;
    const otherQuestions = otherQuestion;
    setIsThereQuestions(true);
    addQuestions(mcqsQuestion, otherQuestions);
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
                  section.questions.map((question: any, i: number) => {
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
                            title={question.questionText}
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

function QuestionsModal({
  numberOfQuestions,
  handleAddingQuestions,
  handleQuestionsInputChange,
}: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function handleSubmit(closeFunction: () => void) {
    closeFunction();
    handleAddingQuestions();
  }
  return (
    <>
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
                <form
                  onSubmit={() => handleSubmit(onClose)}
                  className="grid grid-cols-2 gap-3"
                >
                  <Input
                    labelPlacement="outside"
                    variant="bordered"
                    label="MSQs questions"
                    name="MCQs"
                    placeholder="0"
                    value={numberOfQuestions.MCQs}
                    onChange={handleQuestionsInputChange}
                    min={0}
                    type="number"
                  ></Input>
                  <Input
                    labelPlacement="outside"
                    variant="bordered"
                    label="True or false questions"
                    placeholder="0"
                    name="FillInTheBlank"
                    value={numberOfQuestions.FillInTheBlank}
                    onChange={handleQuestionsInputChange}
                    min={0}
                    type="number"
                  ></Input>
                  <Input
                    labelPlacement="outside"
                    variant="bordered"
                    label="Fill in the black questions"
                    placeholder="0"
                    name="trueOrFalse"
                    value={numberOfQuestions.trueOrFalse}
                    onChange={handleQuestionsInputChange}
                    min={0}
                    type="number"
                  ></Input>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  onClick={() => handleSubmit(onClose)}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
