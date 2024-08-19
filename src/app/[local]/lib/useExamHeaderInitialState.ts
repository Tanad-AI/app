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

export const getInititalTeacherInputs = (
  pageLanguage: "en" | "ar",
  examLanguage: "en" | "ar",
) => [
  {
    name: "school_name",
    placeholder_text: headerLanguage[pageLanguage].enterSchoolName,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].schoolName,
    isAdded: true,
    placementOnPaper: "instatute_section",
  },
  {
    name: "subject",
    placeholder_text: headerLanguage[pageLanguage].enterSubject,
    value_field: "",
    inputValue: lang[examLanguage].subject,
    title: headerLanguage[pageLanguage].subject,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "term_semester",
    placeholder_text: headerLanguage[pageLanguage].enterTermSemester,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].termSemester,
    isAdded: true,
    placementOnPaper: "exam_title",
  },
  {
    name: "year",
    placeholder_text: headerLanguage[pageLanguage].enterYear,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].year,
    isAdded: true,
    placementOnPaper: "exam_title",
  },
  {
    name: "class",
    placeholder_text: headerLanguage[pageLanguage].enterClass,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].class,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "type",
    placeholder_text: headerLanguage[pageLanguage].enterType,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].type,
    isAdded: true,
    placementOnPaper: "exam_title",
  },
  {
    name: "number_of_marks",
    placeholder_text: headerLanguage[pageLanguage].enterNumberOfMarks,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].numberOfMarks,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "day_of_exam",
    placeholder_text: headerLanguage[pageLanguage].enterDayOfExam,
    value_field: "",
    inputValue: lang[examLanguage].day,
    title: headerLanguage[pageLanguage].dayOfExam,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "date_of_exam",
    placeholder_text: headerLanguage[pageLanguage].enterDateOfExam,
    value_field: "",
    inputValue: lang[examLanguage].date,
    title: headerLanguage[pageLanguage].dateOfExam,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "duration",
    placeholder_text: headerLanguage[pageLanguage].enterDurationInHours,
    value_field: "",
    inputValue: lang[examLanguage].time,
    title: headerLanguage[pageLanguage].durationInHours,
    isAdded: true,
    placementOnPaper: "exam_details_section",
  },
];
export const getInitialTeacherButtons = (
  pageLanguage: "en" | "ar",
  examLanguage: "en" | "ar",
) => [
  {
    name: "notes_instructions",
    placeholder_text: headerLanguage[pageLanguage].enterNotesInstructions,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].notesInstructions,
    isAdded: false,
    placementOnPaper: "notes_section",
  },
  {
    name: "class_section",
    placeholder_text: headerLanguage[pageLanguage].enterClassSection,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].classSection,
    isAdded: false,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "number_of_questions",
    placeholder_text: headerLanguage[pageLanguage].enterNumberOfQuestions,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].numberOfQuestions,
    isAdded: false,
    placementOnPaper: "exam_details_section",
  },

  {
    name: "faculty",
    placeholder_text: headerLanguage[pageLanguage].faculty,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].faculty,
    isAdded: false,
    placementOnPaper: "instatute_section",
  },
  {
    name: "country",
    placeholder_text: headerLanguage[pageLanguage].enterCountry,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].country,
    isAdded: false,
    placementOnPaper: "instatute_section",
  },
  {
    name: "number_of_page",
    placeholder_text: headerLanguage[pageLanguage].enterNumberOfPages,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].numberOfPages,
    isAdded: false,
    placementOnPaper: "exam_details_section",
  },
  {
    name: "state_department_name",
    placeholder_text: headerLanguage[pageLanguage].enterStateDepartmentName,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].stateDepartmentName,
    isAdded: false,
    placementOnPaper: "instatute_section",
  },
  {
    name: "ministry_department_name",
    placeholder_text: headerLanguage[pageLanguage].enterMinistryDepartmentName,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].ministryDepartmentName,
    isAdded: false,
    placementOnPaper: "instatute_section",
  },
  {
    name: "logo",
    placeholder_text: headerLanguage[pageLanguage].uploadLogo,
    value_field: "",
    inputValue: "",
    title: headerLanguage[pageLanguage].logo,
    isAdded: false,
    placementOnPaper: "logo_section",
  },
];
export const getInitialStudentsInputs = (
  pageLanguage: "en" | "ar",
  examLanguage: "en" | "ar",
) => [
  {
    name: "std_name",
    placeholder_text: headerLanguage[pageLanguage].enterStudentName,
    value_field: "",
    inputValue: lang[examLanguage].studentName,
    title: headerLanguage[pageLanguage].studentName,
    isAdded: true,
    placementOnPaper: "student_section",
  },

  {
    name: "std_number",
    placeholder_text: headerLanguage[pageLanguage].enterStudentNumber,
    value_field: "",
    inputValue: lang[examLanguage].studentId,
    title: headerLanguage[pageLanguage].studentNumber,
    isAdded: false,
    placementOnPaper: "student_section",
  },
];
export const getInitialOtherStudentsButtons = (
  pageLanguage: "en" | "ar",
  examLanguage: "en" | "ar",
) => [
  {
    name: "std_class",
    placeholder_text: headerLanguage[pageLanguage].studentClass,
    value_field: "",
    inputValue: lang[examLanguage].studentClass,
    title: headerLanguage[pageLanguage].studentClass,
    isAdded: false,
    placementOnPaper: "student_section",
  },
];
