/* eslint-disable @next/next/no-img-element */
"use client";
import { useExamHeaderStore } from "@/app/[local]/store/HeaderStore";
import { useQuizStore } from "@/app/[local]/store/QuizState";
import useFooterStore from "@/app/[local]/store/useFooterStore";
import {
  QuestionType,
  SectionsData,
} from "@/app/[local]/types/document-elements.types";
import MCQsQuestion from "@/app/[local]/ui/MCQsQuestion";
import prisma from "@/app/db";
import examLanguage from "@/lib/examLanguage";
import { createId } from "@paralleldrive/cuid2";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

async function getQuestions(setId: string) {
  const response = await fetch("/api/get-set");
  const { questions } = await response.json();
  return questions;
}

const ExamPaper = ({
  SectionQuestion,
  varient,
  ref,
}: {
  SectionQuestion: any;
  varient: "print" | "normal";
  ref?: any;
}) => {
  const examLogo = useQuizStore((state) => state.examLogo);
  const examDirection = useQuizStore((state) => state.examDirection);
  const pathName = usePathname().slice(1, 3);
  const language: "en" | "ar" = pathName as "en" | "ar";
  const teacherInputs = useExamHeaderStore((state) => state.teacherInputs);
  const studentInputs = useExamHeaderStore((state) => state.studentInputs);
  const examQuestionsSections = useQuizStore(
    (state) => state.examQuestionsSections,
  );
  const setExamQuestionsSectionFromApi = useQuizStore(
    (state) => state.setExamQuestionsSectionFromApi,
  );
  const lines = useFooterStore((state) => state.lines);
  const questionTitles = {
    MCQs: "MCQs",
    trueOrFalse: "True or false",
    fillInTheBlank: "Fill in the blank",
  };
  useEffect(() => {
    getQuestions("KDJSLA")
      .then((set) => {
        const mcqsQuestions = set.questions.filter(
          (item: QuestionType) => item.type === "MCQs",
        );
        const TOF = set.questions.filter(
          (item: QuestionType) => item.type === "trueOrFalse",
        );
        const FIB = set.questions.filter(
          (item: QuestionType) => item.type === "fillInTheBlank",
        );
        const mcqsObject = {
          name: "MCQs",
          id: "",
          title: "MCQs",
          added: false,
          questions: mcqsQuestions,
        };
        const TOFObject = {
          name: "trueOrFalse",
          id: "",
          title: "trueOrFalse",
          added: false,
          questions: TOF,
        };
        const FIBOBject = {
          name: "fillInTheBlank",
          id: "",
          title: "fillInTheBlank",
          added: false,
          questions: FIB,
        };
        const QuestionsFromApi: SectionsData[] = [
          mcqsObject,
          TOFObject,
          FIBOBject,
        ];
        setExamQuestionsSectionFromApi(QuestionsFromApi);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div
      ref={ref}
      dir={examDirection}
      className={`__a4-page  flex  flex-col gap-5 bg-white ${
        varient == "normal" && "min-h-[297mm] w-[210mm] p-[20mm] "
      } `}
    >
      <div className="grid  w-full grid-cols-3  border-[1px] border-black">
        <section className="border-e-[1px] border-black">
          {teacherInputs.map((input, i) => {
            return (
              input.inputValue &&
              input.placementOnPaper == "instatute_section" && (
                <div
                  key={i}
                  className="h-6 border-b-[1px] border-black ps-2 last:border-none"
                >
                  {input.inputValue}
                </div>
              )
            );
          })}
        </section>
        <section className="border-e-[1px] border-black">
          <div className="items-center p-3 text-center">
            {examLogo == "" ? (
              <div className="flex  items-center justify-center ">
                {examLanguage[language].logoPlaceHolder}
              </div>
            ) : (
              <img
                className="mx-auto max-h-16  object-cover align-middle"
                src={examLogo}
                alt={examLanguage[language].logoPlaceHolder}
              />
            )}
          </div>
        </section>
        <section className="">
          {teacherInputs.map((input, i) => {
            return (
              input.inputValue &&
              input.placementOnPaper == "exam_details_section" && (
                <div
                  key={i}
                  className="h-6 border-b-[1px] border-black ps-2 last:border-none"
                >
                  {input.inputValue}
                </div>
              )
            );
          })}
        </section>
        <section className="col-span-3 border-y-[1px] border-black ps-2">
          <div>
            {/* <span>
              <span>
                {examLanguage.en.examTitle[0]}{" "}
                {
                  teacherInputs?.filter((input) => input.name == "type")[0]
                    .inputValue
                }{" "}
              </span>
              {examLanguage.en.examTitle[1]}
              <span>
                {" "}
                {
                  teacherInputs?.filter(
                    (input) => input.name == "term_semester",
                  )[0].inputValue
                }
              </span>{" "}
              {examLanguage.en.examTitle[2]}{" "}
              {
                teacherInputs?.filter((input) => input.name == "year")[0]
                  .inputValue
              }
            </span> */}
          </div>
        </section>
        <section className="col-span-3 space-y-3 py-3 ps-2">
          {studentInputs?.map((field, i) => {
            return (
              field.placementOnPaper == "student_section" && (
                <div className="flex items-baseline" key={i}>
                  <div className="w-fit">{field.inputValue}</div>
                </div>
              )
            );
          })}
        </section>
      </div>
      {examQuestionsSections.map(
        (section: any) =>
          section.questions.length !== 0 && (
            <div key={section.name}>
              <div>{SectionQuestion[section.name].text}</div>
              <div className="space-y-4">
                {section.questions.map((question: any, i: number) => (
                  <MCQsQuestion
                    key={question.id}
                    index={i + 1}
                    Choices={question.choices}
                    questionText={question.questionText}
                  />
                ))}
              </div>
            </div>
          ),
      )}
      <div className="flex w-full flex-col items-center">
        {lines.map((line) => (
          <div key={createId()}>{line.text}</div>
        ))}
      </div>
    </div>
  );
};

export default ExamPaper;
