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

function QuestionsModal({
  numberOfQuestions,
  handleAddingQuestions,
  handleQuestionsInputChange,
}: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const t = useTranslations("Create");

  function handleSubmit(closeModalFunction: () => void) {
    closeModalFunction();
    handleAddingQuestions();
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
