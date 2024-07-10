/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState, useEffect } from "react";
import { useQuizStore } from "@/app/store/QuizState";
import MCQsQuestion from "@/app/ui/MCQsQuestion";
import cuid2, { createId } from "@paralleldrive/cuid2";

const A4page = () => {
  const {
    QuizFormHeaderDetails,
    questionsSections,
    SectionQuestion,
    setA4Page,
  } = useQuizStore();
  const [documentName, setDocumentName] = useState("Untitled document");
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setA4Page(componentRef);
  }, []);

  return (
    <div className="hidden min-w-[516px] flex-col  space-y-2 overflow-y-auto lg:flex">
      <input
        value={documentName}
        onChange={(e) => setDocumentName(e.target.value)}
        className="box-border min-w-fit rounded-md bg-transparent p-0 text-sm focus:border-[2px] focus:border-blue-300 focus:outline-none"
      />
      <div className="flex origin-top-left scale-[0.65] flex-col space-y-14">
        <div
          dir="rtl"
          ref={componentRef}
          className="__a4-page  flex h-[297mm] w-[210mm]  flex-col gap-5 bg-white p-[11mm]"
        >
          <table className="__table-border w-full">
            <tr>
              <td>{QuizFormHeaderDetails.country}</td>
              <td className="items-center text-center" rowSpan={4}>
                <img
                  className="mx-auto h-28 object-cover align-middle"
                  src="images/logo.png"
                  alt="logo goes here"
                />
              </td>
              <td>اليوم: {QuizFormHeaderDetails.dayOfTheExam}</td>
            </tr>
            <tr>
              <td>{QuizFormHeaderDetails.countryDepartmentName}</td>
              <td>التاريخ: {QuizFormHeaderDetails.dateOfTheExam}</td>
            </tr>
            <tr>
              <td>{QuizFormHeaderDetails.stateDepartmentName}</td>
              <td>الزمن: {QuizFormHeaderDetails.durationInHours}</td>
            </tr>
            <tr>
              <td>{QuizFormHeaderDetails.instatuteName}</td>
              <td>عدد الصفحات:</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <span>
                  اختبار الفصل الدراسي
                  <span> {QuizFormHeaderDetails.termSemester} </span>
                  لمادة
                  <span> {QuizFormHeaderDetails.subject} </span>
                  (الفترة الأولى) للصف
                  <span> {QuizFormHeaderDetails.class} </span>
                  للعام الدراسي 1445هـ
                </span>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <span>
                  اسم
                  الطالب..........................................................
                </span>
                {"    "}
                <span> رقم الجلوس............................</span>
              </td>
            </tr>
          </table>
          {questionsSections.map((section: any) => {
            console.log(section);
            return (
              <div key={createId()}>
                <div className="doc-element">
                  {SectionQuestion[section.name].text}
                </div>
                <div className="space-y-3">
                  {section.questions.map((question: any, i: number) => (
                    <MCQsQuestion
                      key={createId()}
                      index={i + 1}
                      Choices={question.choices}
                      questionText={question.questionText}
                    ></MCQsQuestion>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default A4page;
