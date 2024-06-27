/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import QuestionsComponent from "@/app/ui/QuestionComponent";
import DocumentHeader from "@/app/ui/DocumentHeader";

const currentView = [<DocumentHeader />, <QuestionsComponent />];

const Control = ({ activeControlView }: any) => {
  return (
    <>
      <div className="w-full overflow-y-scroll  pb-10 lg:w-1/2">
        {currentView[activeControlView]}
      </div>
    </>
  );
};

export default Control;
