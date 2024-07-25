/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { Paragraph, Text, TinyText } from "../lib/TextComponents";
import DownloadButton from "@/components/DownloadButton";
import ExamPaper from "@/components/ExamPaper";
import PrintPreview from "@/components/PrintPreview";
import { useQuizStore } from "../store/QuizState";
import { FileDown, Play } from "lucide-react";

const PreviewModalButton = () => {
  const QuizFormHeaderDetails = useQuizStore(
    (state: any) => state.QuizFormHeaderDetails,
  );
  const questionsSections = useQuizStore(
    (state: any) => state.questionsSections,
  );
  const SectionQuestion = useQuizStore((state: any) => state.SectionQuestion);
  const pageRef = useRef<HTMLDivElement>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);
  const documentName = useQuizStore((state: any) => state.documentName);

  return (
    <>
      <Button
        onClick={onOpen}
        color="primary"
        size="sm"
        className="hidden md:flex"
        startContent={<Play size={16} />}
      >
        Preview/Download  
      </Button>
      <Button
        isIconOnly
        size="sm"
        color="primary"
        className=" justify-between md:hidden lg:hidden"
      >
        <FileDown className="mx-auto" size={16} />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={true}
        disableAnimation
        scrollBehavior="inside"
        placement="center"
        className=" w-fit  bg-secondary-50 "
        size="3xl"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader>
                <div className="flex w-[410px] justify-between gap-4 pr-5 ">
                  <div className="w-3/4">
                    <Text>{documentName}</Text>
                    <TinyText className="font-normal text-gray-600">
                      Preview how your pages will appear in PDF format here.
                    </TinyText>
                  </div>
                  <DownloadButton disabled={isDocumentLoaded} />
                </div>
              </ModalHeader>
              <ModalBody className="h-svh w-fit">
                <>
                  {isDocumentLoaded ? (
                    <></>
                  ) : (
                    <div className="flex h-[1000px] w-[390px] items-center justify-center">
                      <div className="flex flex-col items-center gap-2">
                        <Spinner />
                        <Paragraph className="text-primary-700">
                          Loading Preview
                        </Paragraph>
                      </div>
                    </div>
                  )}
                  <div id="pagedjsdocroot" style={{ display: "none" }}>
                    <ExamPaper
                      varient="print"
                      QuizFormHeaderDetails={QuizFormHeaderDetails}
                      questionsSections={questionsSections}
                      SectionQuestion={SectionQuestion}
                    />
                  </div>
                  <div
                    id="preview"
                    ref={pageRef}
                    className={`${
                      isDocumentLoaded &&
                      "w-[390px] origin-top-left scale-50 opacity-100"
                    } opacity-0`}
                  ></div>
                  <PrintPreview setIsDocumentLoaded={setIsDocumentLoaded} />
                </>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PreviewModalButton;
