/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import lang from "@/lib/examLanguage";
import headerLanguage from "@/lib/examLanguage/headerLanguage";

type ExamLang = "en" | "ar" | "none";

// this text should change with the exam language not the page language
const initialPlaceholderText = (language: ExamLang) => {
  if (language == "none") return;
  return {
    en: {
      day_of_exam: "Day: ",
      date_of_exam: "Date: ",
      duration: "Time:",
      subject: "Subject: ",
      pages: "No. of Pages: ",
      std_number: "Roll Number: ",
      std_name: "Name: ",
      std_class: "Class: ",
      logoPlaceHolder: "logo goes here",
      examTitle: ["Examination for", "semester", "for the year"],
    },
    ar: {
      day_of_exam: "اليوم: ",
      date_of_exam: "التاريخ: ",
      duration: "الزمن: ",
      subject: "المادة: ",
      pages: "عدد الصفحات: ",
      std_name: "الاسم: ",
      std_number: "رقم الجلوس: ",
      std_class: "الصف: ",
      logoPlaceHolder: "هنا مكان الشعار",
      examTitle: ["اختبار", "الفصل الدراسي", "للعام"],
    },
  };
};

export default lang;

export const getInititalTeacherInputs = (pageLanguage: "en" | "ar") => [
  {
    name: "schoolName",
    placeholder_text: headerLanguage[pageLanguage].enterSchoolName,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].schoolName,
    isAdded: true,
    placementOnPaper: "instatute_section",
  },
  {
    name: "subject",
    placeholder_text: headerLanguage[pageLanguage].enterSubject,
    value_field: {
      en: lang["en"].subject,
      ar: lang["ar"].subject,
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].subject,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "termSemester",
    placeholder_text: headerLanguage[pageLanguage].enterTermSemester,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].termSemester,
    isAdded: true,
    placementOnPaper: "exam_title",
  },
  {
    name: "year",
    placeholder_text: headerLanguage[pageLanguage].enterYear,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].year,
    isAdded: true,
    placementOnPaper: "exam_title",
  },
  {
    name: "class",
    placeholder_text: headerLanguage[pageLanguage].enterClass,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].class,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "type",
    placeholder_text: headerLanguage[pageLanguage].type, // No "Enter" version provided for "type"
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].type,
    isAdded: true,
    placementOnPaper: "exam_title",
  },
  {
    name: "numberOfMarks",
    placeholder_text: headerLanguage[pageLanguage].enterNumberOfMarks,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].numberOfMarks,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "dayOfExam",
    placeholder_text: headerLanguage[pageLanguage].enterDayOfExam,
    value_field: {
      en: lang["en"].day,
      ar: lang["ar"].day,
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].dayOfExam,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "dateOfExam",
    placeholder_text: headerLanguage[pageLanguage].enterDateOfExam,
    value_field: {
      en: lang["en"].day,
      ar: lang["ar"].day,
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].dateOfExam,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "durationInHours",
    placeholder_text: headerLanguage[pageLanguage].enterDurationInHours,
    value_field: {
      en: lang["en"].time,
      ar: lang["ar"].time,
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].durationInHours,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
];

export const getInitialTeacherButtons = (pageLanguage: "en" | "ar") => [
  {
    name: "notesInstructions",
    placeholder_text: headerLanguage[pageLanguage].enterNotesInstructions,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].notesInstructions,
    isAdded: false,
    placementOnPaper: "notes_section",
  },
  {
    name: "classSection",
    placeholder_text: headerLanguage[pageLanguage].enterClassSection,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].classSection,
    isAdded: false,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "numberOfQuestions",
    placeholder_text: headerLanguage[pageLanguage].enterNumberOfQuestions,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].numberOfQuestions,
    isAdded: false,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "faculty",
    placeholder_text: headerLanguage[pageLanguage].faculty,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].faculty,
    isAdded: false,
    placementOnPaper: "instatute_section",
  },
  {
    name: "country",
    placeholder_text: headerLanguage[pageLanguage].enterCountry,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].country,
    isAdded: false,
    placementOnPaper: "instatute_section",
  },
  {
    name: "numberOfPages",
    placeholder_text: headerLanguage[pageLanguage].enterNumberOfPages,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].numberOfPages,
    isAdded: false,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "stateDepartmentName",
    placeholder_text: headerLanguage[pageLanguage].enterStateDepartmentName,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].stateDepartmentName,
    isAdded: false,
    placementOnPaper: "instatute_section",
  },
  {
    name: "ministryDepartmentName",
    placeholder_text: headerLanguage[pageLanguage].enterMinistryDepartmentName,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].ministryDepartmentName,
    isAdded: false,
    placementOnPaper: "instatute_section",
  },
  {
    name: "logo",
    placeholder_text: headerLanguage[pageLanguage].uploadLogo,
    value_field: {
      en: "",
      ar: "",
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].logo,
    isAdded: false,
    placementOnPaper: "logo_section",
  },
];

export const getInitialStudentsInputs = (pageLanguage: "en" | "ar") => [
  {
    name: "studentName",
    placeholder_text: headerLanguage[pageLanguage].enterStudentName,
    value_field: {
      en: lang["en"].studentName,
      ar: lang["ar"].studentName,
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].studentName,
    isAdded: true,
    placementOnPaper: "student_section",
  },
  {
    name: "studentNumber",
    placeholder_text: headerLanguage[pageLanguage].enterStudentNumber,
    value_field: {
      en: lang["en"].studentId,
      ar: lang["ar"].studentId,
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].studentNumber,
    isAdded: false,
    placementOnPaper: "student_section",
  },
];

export const getInitialOtherStudentsButtons = (pageLanguage: "en" | "ar") => [
  {
    name: "studentClass",
    placeholder_text: headerLanguage[pageLanguage].studentClass,
    value_field: {
      en: lang["en"].studentClass,
      ar: lang["ar"].studentClass,
    },
    inputValue: "",
    title: headerLanguage[pageLanguage].studentClass,
    isAdded: false,
    placementOnPaper: "student_section",
  },
];
