/* eslint-disable @next/next/no-img-element */
"use client";

import { useQuizStore } from "@/app/store/QuizState";
import MCQsQuestion from "@/app/ui/MCQsQuestion";
import { Spacer } from "@nextui-org/react";
import { useState } from "react";

const A4page = () => {
  const { QuizFormHeaderDetails, questionsSections, SectionQuestion } =
    useQuizStore();
  const [documentName, setDocumentName] = useState("Untitled document");
  console.log(SectionQuestion["MCQs"].text);

  return (
    <div className="hidden w-[520px] flex-col items-end overflow-y-scroll lg:flex">
      <input
        value={documentName}
        onChange={(e) => setDocumentName(e.target.value)}
        className="w-fit border-none bg-transparent p-0 text-sm outline-1 -outline-offset-1 outline-black/50"
      />
      <Spacer y={2} />
      <div
        dir="rtl"
        className="__scaled-element __a4-page flex min-h-[297mm]  min-w-[210mm] flex-col gap-8 bg-white px-8 py-12"
      >
        <table className="w-full">
          <tr>
            <td>{QuizFormHeaderDetails.country}</td>
            <td className="text-center" rowSpan={4}>
              <img
                className="h-28 object-cover"
                src="https://i.pinimg.com/736x/bb/2b/83/bb2b83a2e68070fd296630ba541fa478.jpg"
                alt="kasjf"
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
        {questionsSections[0].questions.length !== 0 &&
          SectionQuestion["MCQs"].text}
        {questionsSections[0].questions.map((question: any, i: number) => {
          return (
            <MCQsQuestion
              key={i}
              index={i + 1}
              Choices={question.choices}
              questionText={question.questionText}
            ></MCQsQuestion>
          );
        })}
      </div>
      <div className="__scaled-element mt-[-500px] min-h-[297mm] min-w-[210mm] border-2 border-black bg-white p-2 "></div>
    </div>
  );
};

export default A4page;
