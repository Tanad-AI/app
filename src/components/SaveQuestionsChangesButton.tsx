"use client";
import { useQuizStore } from "@/app/[local]/store/QuizState";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { useToast } from "./use-toast";
import { error } from "console";

interface Props {
  setId: string;
}

function SaveQuestionsChangesButton({ setId }: Props) {
  const { toast } = useToast();
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [toastMassage, setToastMassage] = useState("");

  const examQuestionsSections = useQuizStore(
    (state) => state.examQuestionsSections,
  );
  async function saveQuestions() {
    setIsPending(true);

    try {
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
      setIsError(false);
      setToastMassage("Data saved successfully");
    } catch (error) {
      setIsError(true);
      setToastMassage("Could not save data");
    }
    setIsPending(false);
    toast({
      title: toastMassage,
      description: "Friday, February 10, 2023 at 5:57 PM",
      variant: isError ? "destructive" : "default",
    });
  }

  return (
    <Button
      isDisabled={isPending}
      isLoading={isPending}
      onClick={() => saveQuestions()}
    >
      Save
    </Button>
  );
}

export default SaveQuestionsChangesButton;
