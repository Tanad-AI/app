/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import QuestionsComponent from "@/app/ui/QuestionComponent";
import DocumentHeader from "@/app/ui/DocumentHeader";

const currentView = [<DocumentHeader />, <QuestionsComponent />];

interface ControlProps {
  activeControlView: number;
}

const Control = ({ activeControlView }: ControlProps) => {
  return (
    <div className="hidden w-full overflow-y-scroll pb-20 md:block">
      {currentView[activeControlView]}
    </div>
  );
};

export default Control;
