/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";
import { useQuizStore } from "@/app/store/QuizState";
import MCQsQuestion from "@/app/ui/MCQsQuestion";
import { Spacer } from "@nextui-org/react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import image from "../../../../public/images/logo.png";

const A4page = () => {
  const { QuizFormHeaderDetails, questionsSections, SectionQuestion } =
    useQuizStore();
  const [documentName, setDocumentName] = useState("Untitled document");
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const options = {
      scale: 5, // Adjust as needed, higher scale means higher resolution
      allowTaint: true, // Allow rendering images from other domains
    };

    const element = componentRef.current;

    if (!element) {
      console.error("Print element is null.");
      return;
    }

    element.classList.add("pdf-style");

    html2canvas(element, options).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgHeight = (canvas.height * 208) / canvas.width; // 208 is the width of A4 page in mm
      pdf.addImage(imgData, "PNG", 0, 0, 208, imgHeight);
      pdf.save("download.pdf");
    });
    element.classList.remove("pdf-style");
  };

  return (
    <div className="flex flex-col">
      <button onClick={handlePrint}>Download as PDF</button>
      <input
        value={documentName}
        onChange={(e) => setDocumentName(e.target.value)}
        className="w-fit border-none bg-transparent p-0 text-sm outline-1 -outline-offset-1 outline-black/50"
      />
      <div className="hidden w-[520px] flex-col items-end overflow-y-scroll lg:flex">
        <Spacer y={2} />
        <div
          dir="rtl"
          ref={componentRef}
          className="__scaled-element __a4-page flex min-h-[297mm]  min-w-[210mm] flex-col gap-8 bg-white p-[11mm]"
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
          {questionsSections[0].questions.length !== 0 && (
            <div className="doc-element -mb-7">
              {SectionQuestion["MCQs"].text}
            </div>
          )}
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
          {questionsSections[1].questions.length !== 0 && (
            <div className="doc-element -mb-7">
              {SectionQuestion["trueOrFalse"].text}
            </div>
          )}
          {questionsSections[1].questions.map((question: any, i: number) => {
            return (
              <MCQsQuestion
                key={i}
                index={i + 1}
                Choices={question.choices}
                questionText={question.questionText}
              ></MCQsQuestion>
            );
          })}
          {questionsSections[2].questions.length !== 0 && (
            <div className="doc-element -mb-7">
              {SectionQuestion["FillInTheBlank"].text}
            </div>
          )}
          {questionsSections[2].questions.map((question: any, i: number) => {
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
    </div>
  );
};

export default A4page;
