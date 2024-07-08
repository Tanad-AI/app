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

export default QuestionsModal;
