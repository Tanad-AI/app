/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useQuizStore } from "@/app/[local]/store/QuizState";
import ExamPaper from "@/components/ExamPaper";

interface A4PagePropsType {
  className: string;
}

const A4page = ({ className }: A4PagePropsType) => {
  const SectionQuestion = useQuizStore((state) => state.SectionQuestion);
  const documentName = useQuizStore((state) => state.documentName);
  const setDocumentName = useQuizStore((state) => state.setDocumentName);

  return (
    <div
      className={`hidden min-w-[516px] flex-col  space-y-2 overflow-y-auto lg:flex ${className}`}
    >
      <div className="flex justify-between">
        <input
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
          className="box-border min-w-fit rounded-md bg-transparent p-0 text-sm focus:border-[2px] focus:border-blue-300 focus:outline-none"
        />
      </div>
      <div className="flex origin-top-left scale-[0.65] flex-col space-y-14">
        <ExamPaper varient="normal" SectionQuestion={SectionQuestion} />
      </div>
    </div>
  );
};

export default A4page;
