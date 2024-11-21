/* eslint-disable @next/next/no-img-element */
"use client";
import useReportStore from "@/app/[local]/store/reportStore";
import React from "react";

const ExamPaper = ({
  SectionQuestion,
  varient,
  ref,
}: {
  SectionQuestion: any;
  varient: "print" | "normal";
  ref?: any;
}) => {
  const fields = useReportStore((state) => state.fields);

  return (
    <div
      className={`__a4-page  flex  flex-col gap-5 bg-white ${
        varient == "normal" && "min-h-[297mm] w-[210mm] p-[20mm] "
      } `}
    >
      <div className="p-4">
        {fields.map((field) => (
          <div key={field.id} className="mb-4 border-b pb-2">
            <h3 className="mb-2 text-lg font-bold">{field.title}</h3>
            <div className="space-y-2">
              {field.details.map((detail) => {
                if (field.name == "cover") {
                  return (
                    <div
                      className="flex w-full justify-center "
                      key={detail.id}
                    >
                      <div className="flex min-h-[48px] w-56 items-center justify-center text-pretty rounded-lg bg-gradient-to-t from-gray-700 to-gray-500 text-center font-bold text-white underline underline-offset-[7px]">
                        {detail.value}
                      </div>
                    </div>
                  );
                }
                {if (field.name == "reportDetailsTable") return}
                return (
                  <div key={detail.id} className="text-sm">
                    <strong>{detail.title}: </strong>
                    {detail.value || "No value provided"}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamPaper;
