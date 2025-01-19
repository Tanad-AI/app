/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import ExamPaper from "@/components/A4Paper";

interface A4PagePropsType {
  className: string;
}

const A4page = ({ className }: A4PagePropsType) => {
  return (
    <div
      className={`hidden flex-grow flex-col  space-y-2 overflow-y-auto lg:flex ${className}`}
    >
      <div className="flex justify-between">
        <input className="box-border min-w-fit rounded-md bg-transparent p-0 text-sm focus:border-[2px] focus:border-blue-300 focus:outline-none" />
      </div>
      <div className="flex origin-top-left scale-[0.65] flex-col space-y-14">
        <ExamPaper />
      </div>
    </div>
  );
};

export default A4page;
