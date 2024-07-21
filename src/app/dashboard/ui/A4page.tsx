/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { useQuizStore } from "@/app/store/QuizState";
import { Play } from "lucide-react";
import { SubHeader, Text } from "@/app/lib/TextComponents";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import ExamPaper from "@/components/ExamPaper";
import PrintPreview from "@/components/PrintPreview";

const A4page: React.FC = () => {
  const QuizFormHeaderDetails = useQuizStore(
    (state: any) => state.QuizFormHeaderDetails,
  );
  const questionsSections = useQuizStore(
    (state: any) => state.questionsSections,
  );
  const SectionQuestion = useQuizStore((state: any) => state.SectionQuestion);

  const [documentName, setDocumentName] = useState("Untitled document");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="hidden min-w-[516px] flex-col  space-y-2 overflow-y-auto lg:flex">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={true}
        scrollBehavior="inside"
        placement="bottom-center"
        className="h-svh w-fit bg-secondary-50 p-0"
        size="xl"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader>
                <div className="flex w-full justify-between pr-5 ">
                  <Text>{documentName}</Text>
                  <Button size="sm" className="bg-primary-700 text-white">
                    download
                  </Button>
                </div>
              </ModalHeader>
              <ModalBody className="h-svh w-fit">
                <div>
                  <div id="pagedjsdocroot" style={{ display: "none" }}>
                    <ExamPaper
                      varient="print"
                      QuizFormHeaderDetails={QuizFormHeaderDetails}
                      questionsSections={questionsSections}
                      SectionQuestion={SectionQuestion}
                    />
                  </div>
                  <div id="preview" className=""></div>
                  <PrintPreview />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex justify-between">
        <input
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
          className="box-border min-w-fit rounded-md bg-transparent p-0 text-sm focus:border-[2px] focus:border-blue-300 focus:outline-none"
        />
        <div onClick={onOpen} className="flex cursor-pointer items-center">
          <Play size={16} />
          <Text>Preview</Text>
        </div>
      </div>
      <div className="flex origin-top-left scale-[0.65] flex-col space-y-14">
        <ExamPaper
          varient="normal"
          QuizFormHeaderDetails={QuizFormHeaderDetails}
          questionsSections={questionsSections}
          SectionQuestion={SectionQuestion}
        />
      </div>
    </div>
  );
};

export default A4page;
