/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import QuestionsComponent from "@/app/[local]/ui/QuestionComponent";
import DocumentHeader from "@/app/[local]/ui/DocumentHeader";
import FooterControl from "../../ui/FooterControl";

const currentView = [
  <DocumentHeader />,
  <QuestionsComponent />,
  <FooterControl />,
];

interface ControlProps {
  activeControlView: number;
  className?: string;
}

const Control = ({ activeControlView, className }: ControlProps) => {
  return (
    <div className={`w-full overflow-y-scroll pb-20 ${className}`}>
      {currentView[activeControlView]}
    </div>
  );
};

export default Control;
