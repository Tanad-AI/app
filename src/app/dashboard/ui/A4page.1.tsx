/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useQuizHeaderStore } from "@/app/lib/store/QuizState";

export const A4page = () => {
  const { QuizFormHeaderDetails } = useQuizHeaderStore();

  return (
    <div className="hidden w-[600px] flex-col  items-end overflow-y-scroll md:flex">
      <div className="__scaled-element min-h-[297mm] min-w-[210mm] border-2 border-black bg-white p-2 ">
        <table className="w-full" dir="rtl">
          <tbody>
            <tr>
              <td>{QuizFormHeaderDetails.country}</td>
              <td rowSpan={4}>
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
              <td colSpan={3}>اسم الطالب...................</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="__scaled-element mt-[-500px] min-h-[297mm] min-w-[210mm] border-2 border-black bg-white p-2 "></div>
    </div>
  );
};
