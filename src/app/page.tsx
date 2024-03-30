"use client";
import React, { useState, useEffect, useRef } from "react";

const Questions = [
  {
    questionText: "ما هي الخاصية التي تصف درجة الاتقان في القياس؟",
    choices: ["الدقة", "التحكم", "السرعة", "الموثوقية"],
    page: 0,
    الإجابة: "الدقة",
  },
  {
    questionText: "ما هي الخاصية التي تصف درجة الاتقان في القياس؟",
    choices: ["الدقة", "التحكم", "السرعة", "الموثوقية"],
    page: 0,
    الإجابة: "الدقة",
  },
  {
    questionText: "ما هي الخاصية التي تصف درجة الاتقان في القياس؟",
    choices: ["الدقة", "التحكم", "السرعة", "الموثوقية"],
    page: 0,
    الإجابة: "الدقة",
  },
  {
    questionText: "ما هي الخاصية التي تصف درجة الاتقان في القياس؟",
    choices: ["الدقة", "التحكم", "السرعة", "الموثوقية"],
    page: 0,
    الإجابة: "الدقة",
  },
  {
    questionText: "ما هي الخاصية التي تصف درجة الاتقان في القياس؟",
    choices: ["الدقة", "التحكم", "السرعة", "الموثوقية"],
    page: 0,
    الإجابة: "الدقة",
  },
  {
    questionText: "ما هي الخاصية التي تصف درجة الاتقان في القياس؟",
    choices: ["الدقة", "التحكم", "السرعة", "الموثوقية"],
    page: 0,
    الإجابة: "الدقة",
  },
  {
    questionText: "ما هي الخاصية التي تصف درجة الاتقان في القياس؟",
    choices: ["الدقة", "التحكم", "السرعة", "الموثوقية"],
    page: 0,
    الإجابة: "الدقة",
  },
  {
    questionText: "ما هي الخاصية التي تصف درجة الاتقان في القياس؟",
    choices: ["الدقة", "التحكم", "السرعة", "الموثوقية"],
    page: 0,
    الإجابة: "الدقة",
  },
  {
    questionText: "ماذا يمثل زاوية النتيجة المحصلة في الفضاء الثلاثي؟",
    choices: [
      "زاوية الانحراف",
      "زاوية الارتكاز",
      "زاوية النتيجة المحصلة",
      "زاوية القياس",
    ],
    page: 0,
    الإجابة: "زاوية النتيجة المحصلة",
  },
  {
    questionText: "كيف يتم حساب فترة الوقوف للجسم الملقى في الهواء؟",
    choices: [
      "بمعادلة السرعة",
      "بمعادلة الزمن",
      "بمعادلة الارتفاع",
      "بمعادلة المسافة",
    ],
    page: 0,
    الإجابة: "بمعادلة الزمن",
  },
  {
    questionText: "ما المقصود بالسرعة النهائية؟",
    choices: [
      "السرعة المتوسطة",
      "السرعة القصوى",
      "السرعة الحدية",
      "السرعة النهائية",
    ],
    page: 0,
    الإجابة: "السرعة النهائية",
  },
  {
    questionText: "ما هو التعريف الصحيح للسرعة اللحظية؟",
    choices: [
      "السرعة في لحظة معينة",
      "السرعة المتوسطة على مدار الزمن",
      "السرعة القصوى",
      "السرعة المتغيرة",
    ],
    page: 0,
    الإجابة: "السرعة في لحظة معينة",
  },
  {
    questionText: "كيف يمكن حساب السرعة المتوسطة؟",
    choices: [
      "بقسمة المسافة على الزمن",
      "بضرب المسافة في الزمن",
      "بجمع المسافة والزمن",
      "بطرح المسافة من الزمن",
    ],
    page: 0,
    الإجابة: "بقسمة المسافة على الزمن",
  },
  {
    questionText: "ما هي السرعة المتوسطة؟",
    choices: [
      "السرعة في لحظة معينة",
      "السرعة على مدار الزمن",
      "السرعة القصوى",
      "السرعة النهائية",
    ],
    page: 0,
    الإجابة: "السرعة على مدار الزمن",
  },
  {
    questionText:
      "ما هو التعريف الدقيق للحركة الحرة ما هو التعريف الدقيق للحركة الحرةما هو التعريف الدقيق للحركة الحرةما هو التعريف الدقيق للحركة الحرة ما هو التعريف الدقيق للحركة الحرة ما هو التعريف الدقيق للحركة الحرة للجسم؟",
    choices: [
      "حركة جسم بسرعة ثابتة  ",
      "حركة جسم بسرعة متغ ركة جسم بسرعة متغ ركة جسم بسرعة متغ ركة جسم بسرعة متغ ركة جسم بسرعة متغ ركة جسم بسرعة متغ يرة",
      "حركة جسم بدون تأثير خارجي",
      "حركة جسم بتأثير مقاومة الهواء",
    ],
    page: 0,
    الإجابة: "حركة جسم بدون تأثير خارجي",
  },
  {
    questionText:
      "ما هو التمثيل الرياضي لدقة القياس؟ ما هو التمثيل الرياضي لدقة القياس؟ما هو التمثيل الرياضي لدقة القياس؟ما هو التمثيل الرياضي لدقة القياس؟ ما هو التمثيل الرياضي لدقة القياس؟ ما هو التمثيل الرياضي لدقة القياس؟",
    choices: ["الدقة", "الدقة الزمنية", "السرعة", "الموثوقية"],
    page: 0,
    الإجابة: "الدقة",
  },
  {
    questionText:
      "كيف يمكن وصف دقة القياس بالنسبة كيف يمكن وصف دقة القياس بالنسبةكيف يمكن وصف دقة القياس بالنسبةكيف يمكن وصف دقة القياس بالنسبة كيف يمكن وصف دقة القياس بالنسبة كيف يمكن وصف دقة القياس بالنسبة لقيمة حقيقية؟",
    choices: [
      "بالتفاوت بين القيم المقاسة   ركة جسم بسرعة متغركة جسم بسرعة متغ ركة جسم بسرعة متغ ركة جسم بسرعة متغ  والقيم الحقيقية",
      "بالتفاوت بين القيم المقاسة",
      "بالتفاوت بين القيم الحقيقية",
      "بالتفاوت بين القيم الحقيقية والنسبية",
    ],
    page: 0,
    الإجابة: "بالتفاوت بين القيم المقاسة والقيم الحقيقية",
  },
];
export default function Home() {
  const [showableQuestions, setShowableQuestions] = useState([{ Questions }]);

  const ref = useRef(null);
  const pageHeight = useRef(null);

  return (
    <>
      <main className="bg-gray-400  p-5" dir="">
        <div className="w-[210mm] h-[297mm] py-5 mx-auto bg-white border-2 border-grey-500">
          <article
            ref={pageHeight}
            className="size-[90%] mx-auto  border-black"
            dir="rtl"
          >
            <section className="wrapper  flex flex-col h-full">
              <ExamHeader />
              <SectionQuestion questionText={"أختر الإجابة الصحيحة"} />
              <div ref={ref} className="flex flex-col gap-2">
                {Questions.map((question, i) => {
                  return (
                    <>
                      <Table
                        i={i}
                        questionData={question}
                        questionsObject={Questions}
                        key={question.questionText}
                        setShowableQuestions={setShowableQuestions}
                      >
                        <thead>
                          <tr>
                            <Question
                              questionNumber={i + 1}
                              questionText={question.questionText}
                            />
                          </tr>
                          <tr>
                            {question.choices.map((choice, i) => {
                              return (
                                <MCQsChoice
                                  key={choice}
                                  choiceText={choice}
                                  idx={i}
                                />
                              );
                            })}
                          </tr>
                        </thead>
                      </Table>
                    </>
                  );
                })}
              </div>
            </section>
          </article>
        </div>
        <div className="h-4 w-full bg-red-500"></div>
        <div className="w-[210mm] h-[297mm] py-5 mx-auto bg-white border-2 border-grey-500" />
      </main>
    </>
  );

  function ExamHeader({}) {
    return (
      <div className="flex justify-between w-full">
        <h1>رياضيات 3 - 2</h1>
        <p>
          اسم الطالب............................................................
        </p>
      </div>
    );
  }
}

const Table = ({
  children,
  i,
  questionData,
  setShowableQuestions,
  questionsObject,
}: {
  children: React.ReactNode;
  i: number;
  questionData: any;
  setShowableQuestions: any;
  questionsObject: any;
}) => {
  return (
    <table className="border-[1px]   border-black w-full text-right">
      {children}
    </table>
  );
};

function SectionQuestion({ questionText }: { questionText: string }) {
  return <div className="text-xl">{questionText}</div>;
}
function Question({
  questionNumber,
  questionText,
}: {
  questionNumber: number;
  questionText: string;
}) {
  return (
    <>
      <th
        className="border-[1px] w-[4%] text-center border-black"
        scope="col"
        rowSpan={2}
      >
        {questionNumber}
      </th>
      <th
        className="border-[1px] px-2 border-black h-8"
        scope="col"
        colSpan={8}
      >
        {questionText}
      </th>
    </>
  );
}

function MCQsChoice({ idx, choiceText }: { idx: number; choiceText: string }) {
  const letters = ["أ", "ب", "ج", "د"];
  return (
    <>
      <th className="border-[1px] border-black px-2">{letters[idx]}</th>
      <th className="border-[1px] px-2 border-black w-1/4" scope="col">
        {choiceText}
      </th>
    </>
  );
}
