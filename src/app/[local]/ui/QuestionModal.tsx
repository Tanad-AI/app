"use client";
import NumberInput from "@/components/NumberInput";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useQuizStore } from "../store/QuizState";
import { SectionsData, QuestionType } from "../types/document-elements.types";

const initialMcqsSection: SectionsData = {
  name: "MCQs",
  title: "MCQs",
  added: false,
  questions: [],
  id: "",
};
const initialTrueOrFalseSecttion: SectionsData = {
  name: "trueOrFalse",
  title: "True or false",
  added: false,
  questions: [],
  id: "",
};

const initialFillInTheBlankSections: SectionsData = {
  name: "fillInTheBlank",
  title: "Fill in the blank",
  added: false,
  questions: [],
  id: "",
};

function QuestionsModal({
  numberOfQuestions,
  handleQuestionsInputChange,
}: any) {
  const t = useTranslations("Create");

  const mcqsQuestion: QuestionType = {
    id: "",
    questionText: "",
    answer: "",
    placeholder: t("enterYourQuestions"),
    choices: [
      {
        choiceText: "",
        isTrue: false,
        id: "",
      },
      {
        choiceText: "",
        isTrue: false,
        id: "",
      },
      {
        choiceText: "",
        isTrue: false,
        id: "",
      },
      {
        choiceText: "",
        isTrue: false,
        id: "",
      },
    ],
    explanation: "",
    type: "MCQs",
    image: [],
  };

  const tOrFQuestion: QuestionType = {
    id: "",
    questionText: "",
    answer: "",
    placeholder: t("enterYourQuestions"),
    choices: [
      {
        choiceText: t("true"),
        isTrue: false,
        id: "",
      },
      {
        choiceText: t("false"),
        isTrue: false,
        id: "",
      },
    ],
    explanation: "",
    type: "trueOrFalse",
    image: [],
  };

  const fillInTheBlankQuestion: QuestionType = {
    id: "",
    questionText: "",
    answer: "",
    placeholder: t("enterYourQuestions"),
    choices: [],
    explanation: "",
    type: "fillInTheBlank",
    image: [],
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const setExamQuestionsSection = useQuizStore(
    (state) => state.setExamQuestionsSection,
  );
  const setNumberOfQuestions = useQuizStore(
    (state) => state.setNumberOfQuestions,
  );

  function handleSubmit(closeModalFunction: () => void) {
    closeModalFunction();
    const sections = [
      { section: initialMcqsSection, question: mcqsQuestion, key: "MCQs" },
      {
        section: initialTrueOrFalseSecttion,
        question: tOrFQuestion,
        key: "trueOrFalse",
      },
      {
        section: initialFillInTheBlankSections,
        question: fillInTheBlankQuestion,
        key: "fillInTheBlank",
      },
    ];

    sections.forEach(({ section, question, key }) => {
      setExamQuestionsSection(section, question, +numberOfQuestions[key]);
    });

    setNumberOfQuestions({ MCQs: "", fillInTheBlank: "", trueOrFalse: "" });
  }

  return (
    <>
      <Button onPress={onOpen} color="primary" size="sm">
        <PlusIcon size={16} /> {t("addQuestions")}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        disableAnimation
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("addQuestions")}
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={() => handleSubmit(onClose)}
                  className="grid grid-cols-2 gap-3"
                >
                  <NumberInput
                    maxValue="400"
                    minValue="0"
                    onChange={handleQuestionsInputChange}
                    value={numberOfQuestions.MCQs}
                    label={t("mcqQuestions")}
                    name="MCQs"
                  />

                  <NumberInput
                    maxValue="400"
                    minValue="0"
                    label={t("trueFalseQuestions")}
                    name="trueOrFalse"
                    value={numberOfQuestions.trueOrFalse}
                    onChange={handleQuestionsInputChange}
                  />
                  <NumberInput
                    maxValue="400"
                    minValue="0"
                    label={t("fillInTheBlankQuestions")}
                    name="fillInTheBlank"
                    value={numberOfQuestions.fillInTheBlank}
                    onChange={handleQuestionsInputChange}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("close")}
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  onClick={() => handleSubmit(onClose)}
                >
                  {t("add")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default QuestionsModal;
