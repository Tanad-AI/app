import NumberInput from "@/components/NumberInput";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { PlusIcon } from "lucide-react";

function QuestionsModal({
  numberOfQuestions,
  handleAddingQuestions,
  handleQuestionsInputChange,
}: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function handleSubmit(closeModalFunction: () => void) {
    closeModalFunction();
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
        disableAnimation
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
                  <NumberInput
                    maxValue="400"
                    minValue="0"
                    onChange={handleQuestionsInputChange}
                    value={numberOfQuestions.MCQs}
                    label="MSQs questions"
                    name="MCQs"
                  />

                  <NumberInput
                    maxValue="400"
                    minValue="0"
                    label="True or false questions"
                    name="trueOrFalse"
                    value={numberOfQuestions.trueOrFalse}
                    onChange={handleQuestionsInputChange}
                  />
                  <NumberInput
                    maxValue="400"
                    minValue="0"
                    label="Fill in the black questions"
                    name="FillInTheBlank"
                    value={numberOfQuestions.FillInTheBlank}
                    onChange={handleQuestionsInputChange}
                  />
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

export default QuestionsModal;
