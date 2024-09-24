"use client";
import { useQuizStore } from "@/app/[local]/store/QuizState";
import { Button } from "@nextui-org/react";
import React from "react";

interface Props {
  setId: string;
}

function SaveQuestionsChangesButton({ setId }: Props) {
  const examQuestionsSections = useQuizStore(
    (state) => state.examQuestionsSections,
  );
  async function saveQuestions() {
    const response = await fetch("/api/save-questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        setId: setId,
        questionSet: examQuestionsSections,
      }),
    });
    const data = await response.json();
  }

  return <Button onClick={() => saveQuestions()}>Save</Button>;
}

export default SaveQuestionsChangesButton;
