import React from "react";

type MCQsQuestionType = {
  index: number;
  questionText: string;
  Choices: ChoiceType[];
};

const MCQsQuestion = ({ index, questionText, Choices }: MCQsQuestionType) => {
  return (
    <>
      <table dir="rtl" className="w-full border-[1px] border-black text-right">
        <>
          <tr>
            <th
              className="w-[4%] border-[1px] border-black text-center"
              scope="col"
              rowSpan={2}
            >
              {index}
            </th>
            <th
              className="h-8 border-[1px] border-black px-2"
              scope="col"
              colSpan={12}
            >
              {questionText}
            </th>
          </tr>
        </>
        <tr>
          {Choices.map((choice, i) => (
            <Choice key={i} choiceText={choice.choiceText} index={i} />
          ))}
        </tr>
      </table>
    </>
  );
};
type ChoiceType = {
  index: number;
  choiceText?: string | null;
};

function Choice({ index, choiceText }: ChoiceType) {
  const letters = ["أ", "ب", "ج", "د"];
  console.log(choiceText);

  return (
    <>
      <th className="w-8 text-center">{letters[index]}</th>
      <th className="max-w-1/4 border-[1px]  border-black px-2" scope="col">
        {choiceText}
      </th>
    </>
  );
}

export default MCQsQuestion;
