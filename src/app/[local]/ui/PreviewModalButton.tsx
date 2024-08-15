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
import { useTranslations } from "next-intl";

const PreviewModalButton = () => {
  const questionsSections = useQuizStore(
    (state: any) => state.questionsSections,
  );
  const SectionQuestion = useQuizStore((state: any) => state.SectionQuestion);
  const pageRef = useRef<HTMLDivElement>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);
  const documentName = useQuizStore((state: any) => state.documentName);
  const t = useTranslations("Create");

  return (
    <>
      <Button
        onClick={onOpen}
        color="primary"
        size="sm"
        className="hidden md:flex"
        startContent={<Play size={16} />}
      >
        {t("previewDownload")}
      </Button>

      <Button
        onClick={onOpen}
        isIconOnly
        size="sm"
        color="primary"
        className=" justify-between md:hidden lg:hidden"
      >
        <Play className="mx-auto" size={16} />
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
                      {t("previewPdf")}
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
                          {t("loadingPreview")}
                        </Paragraph>
                      </div>
                    </div>
                  )}
                  <div id="pagedjsdocroot" style={{ display: "none" }}>
                    <ExamPaper
                      varient="print"
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
