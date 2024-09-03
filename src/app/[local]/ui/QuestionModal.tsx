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

const initialMcqsSection = {
  name: "MCQs",
  title: "MCQs",
  added: false,
  questions: [],
  id: "",
};
const initialTrueOrFalseSecttion = {
  name: "trueOrFalse",
  title: "True or false",
  added: false,
  questions: [],
  id: "",
};

const initialFillInTheBlankSections = {
  name: "FillInTheBlank",
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

  const mcqsQuestion = {
    id: "",
    questionText: "",
    answer: "",
    placeholder: t("enterYourQuestions"),
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

  const tOrFQuestion = {
    id: "",
    questionText: "",
    answer: "",
    placeholder: t("enterYourQuestions"),
    choices: [
      {
        choiceText: t("true"),
        isTrue: false,
      },
      {
        choiceText: t("false"),
        isTrue: false,
      },
    ],
  };

  const otherQuestion = {
    id: "",
    questionText: "",
    answer: "",
    placeholder: t("enterYourQuestions"),
    choices: [],
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
        question: otherQuestion,
        key: "FillInTheBlank",
      },
    ];

    sections.forEach(({ section, question, key }) => {
      setExamQuestionsSection(section, question, +numberOfQuestions[key]);
    });

    setNumberOfQuestions({ MCQs: "", FillInTheBlank: "", trueOrFalse: "" });
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
                    name="FillInTheBlank"
                    value={numberOfQuestions.FillInTheBlank}
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
