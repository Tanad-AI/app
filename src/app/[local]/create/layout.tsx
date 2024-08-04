"use client";
import ExamPaper from "@/components/ExamPaper";
import CreatePageNavbar from "./ui/CreatePageNavbar";
import { useQuizStore } from "../store/QuizState";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { QuizFormHeaderDetails, questionsSections, SectionQuestion } =
    useQuizStore();
  return (
    <section className="mx-auto  max-w-7xl px-8 pt-3 lg:px-20">
      <CreatePageNavbar />
      <div>
        <div id="pagedjsdocroot" style={{ display: "none", scale: 0 }}>
          <ExamPaper
            varient="print"
            QuizFormHeaderDetails={QuizFormHeaderDetails}
            questionsSections={questionsSections}
            SectionQuestion={SectionQuestion}
          />
        </div>
        <div id="preview"></div>
        {children}
      </div>
    </section>
  );
}
