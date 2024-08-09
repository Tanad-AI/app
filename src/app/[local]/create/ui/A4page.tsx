/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import { useQuizStore } from "@/app/[local]/store/QuizState";
import { Play } from "lucide-react";
import { Text } from "@/app/[local]/lib/TextComponents";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import ExamPaper from "@/components/ExamPaper";
import PrintPreview from "@/components/PrintPreview";
import DownloadButton from "@/components/DownloadButton";

const A4page: React.FC = () => {
  const QuizFormHeaderDetails = useQuizStore(
    (state: any) => state.QuizFormHeaderDetails,
  );
  const questionsSections = useQuizStore(
    (state: any) => state.questionsSections,
  );
  const SectionQuestion = useQuizStore((state: any) => state.SectionQuestion);
  const documentName = useQuizStore((state: any) => state.documentName);
  const setDocumentName = useQuizStore((state: any) => state.setDocumentName);
  const [toggleModalOpen, setToggleModalOpen] = useState(false);

  return (
    <div className="hidden min-w-[516px] flex-col  space-y-2 overflow-y-auto lg:flex">
      <div className="flex justify-between">
        <input
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
          className="box-border min-w-fit rounded-md bg-transparent p-0 text-sm focus:border-[2px] focus:border-blue-300 focus:outline-none"
        />
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
