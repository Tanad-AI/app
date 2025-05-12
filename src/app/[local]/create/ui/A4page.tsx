/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import A4Paper from "@/components/A4Paper";
import useCustomizeStore from "../../store/pageCustomizationStore";

interface A4PagePropsType {
  className: string;
}

const A4page = ({ className }: A4PagePropsType) => {
  const textDirection = useCustomizeStore((state) => state.textDirection);
  const documentName = useCustomizeStore((state) => state.documentName);
  const setDocumentName = useCustomizeStore((state) => state.setDocumentName);
  return (
    <div
      className={`flex-col  space-y-2 overflow-y-auto pb-36 lg:flex ${className}`}
    >
      <div className="flex justify-between">
        <input
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
          className="box-border min-w-fit rounded-md bg-transparent p-0 text-sm focus:border-[2px] focus:border-blue-300 focus:outline-none"
        />
      </div>
      <div
        className={`flex ${
          textDirection == "rtl" ? "origin-top" : "origin-top-right"
        }  flex-col`}
      >
        <A4Paper />
      </div>
    </div>
  );
};

export default A4page;
