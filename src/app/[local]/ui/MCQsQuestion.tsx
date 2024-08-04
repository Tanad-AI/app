import React from "react";

type MCQsQuestionType = {
  index: number;
  questionText: string;
  Choices: ChoiceType[];
};

const MCQsQuestion = ({ index, questionText, Choices }: MCQsQuestionType) => {
  return (
    <div className="grid grid-cols-24 border-[1px] border-black">
      <div className="flex items-center justify-center border-e-[1px] border-black  ">
        <h6>{index}</h6>
      </div>
      <div
        className={`col-span-23 grid grid-cols-subgrid border-black ${
          Choices.length > 0 ? " grid-rows-2" : " grid-rows-1"
        }`}
      >
        <div className="col-span-23 grid min-h-4 w-full border-b-[1px] border-black px-1.5 pt-1">
          <h6>{questionText}</h6>
        </div>
        {Choices.length > 0 && (
          <div className="col-span-23 flex ">
            {Choices.map((choice, i) => (
              <Choice key={i} choiceText={choice.choiceText} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
type ChoiceType = {
  index: number;
  choiceText?: string | null;
};

function Choice({ index, choiceText }: ChoiceType) {
  const letters = ["أ", "ب", "ج", "د"];

  return (
    <div className="grid w-full grid-cols-20 border-[1px] border-b-0  border-r-0 border-t-0 border-black last:border-none  ">
      <div className="col-span-2 border-e-[1px] border-black text-center">
        <h6>{letters[index]}</h6>
      </div>
      <div className="col-span-18 h-fit  grid-cols-subgrid text-wrap px-2 ">
        <h6>{choiceText}</h6>
      </div>
    </div>
  );
}

export default MCQsQuestion;
