/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useQuizHeaderStore } from "@/app/lib/store/QuizState";

const A4page = () => {
  const { QuizFormHeaderDetails } = useQuizHeaderStore();

  return (
    <div className="hidden w-[520px] flex-col  items-end overflow-y-scroll lg:flex">
      <div className="__scaled-element __a4-page min-h-[297mm] min-w-[210mm]  bg-white px-8 py-12">
        <table className="w-full" dir="rtl">
          <tr>
            <td>{QuizFormHeaderDetails.country}</td>
            <td className="text-center" rowSpan={4}>
              {/* <img
                className="h-28 object-cover"
                src="https://i.pinimg.com/736x/bb/2b/83/bb2b83a2e68070fd296630ba541fa478.jpg"
                alt="kasjf"
              /> */}
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
      </div>
      <div className="__scaled-element mt-[-500px] min-h-[297mm] min-w-[210mm] border-2 border-black bg-white p-2 "></div>
    </div>
  );
};

export default A4page;
