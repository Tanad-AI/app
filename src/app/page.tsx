/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect, useRef, use } from "react";
import { useQuizHeaderStore } from "./lib/store/QuizState";
import {
  QuizDetailsFormTypes,
  QuizHeaderFormDataType,
} from "./create/lib/formsTypes";

const Questions = [
  {
    questionText: "ما هي الخاصية التي تصف درجة الاتقان في القياس؟",
    choices: ["الدقة", "التحكم", "السرعة", "الموثوقية"],
    page: 0,
    الإجابة: "الدقة",
  },
  {
    questionText: "أي من العبارات الاتية تكافيء   sin휃+cos휃cot휃",
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
  const { QuizFormHeaderDetails } = useQuizHeaderStore();

  const ref = useRef(null);
  const pageHeight = useRef(null);

  return (
    <>
      <main className="">
        {QuizFormHeaderDetails.class}
        <div className="border-grey-500 mx-auto h-[469.69px] min-w-[332.05px] scale-50 border-2 bg-white py-5">
          <article
            ref={pageHeight}
            className="mx-auto size-[90%]  border-black"
            dir="rtl"
          >
            <section className="wrapper  flex h-full flex-col">
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
        <div className="border-grey-500 mx-auto h-[297mm] w-[210mm] border-2 bg-white py-5" />
      </main>
    </>
  );

  function ExamHeader() {
    return (
      <div className="grid  grid-rows-3 ">
        <section className="grid w-[710px] auto-cols-fr grid-cols-4  ">
          <div className=" ">
            <div className="__table-border">المملكة العربية السعودية</div>
            <div className="__table-border">
              {QuizFormHeaderDetails.stateDepartmentName}
            </div>
            <div className="__table-border">
              {QuizFormHeaderDetails.countryDepartmentName}
            </div>
            <div className="__table-border">
              {QuizFormHeaderDetails.instatuteName}
            </div>
          </div>

          <div className="__table-border ">
            <div className="__table-border size-12 bg-slate-500"></div>
          </div>

          <div className="grid  grid-cols-2">
            <div className=" ">
              <div className="__table-border">اليوم:</div>
              <div className="__table-border">التاريخ</div>
              <div className="__table-border">الزمن</div>
              <div className="__table-border">عدد الصفحات</div>
            </div>
            <div className="border-l-[1px] border-black ">
              <div className="__table-border ">
                {QuizFormHeaderDetails.dateOfTheExam}
              </div>
              <div className="__table-border">
                {QuizFormHeaderDetails.dateOfTheExam}
              </div>
              <div className="__table-border">
                {QuizFormHeaderDetails.durationInHours}
              </div>
              <div className="__table-border">2</div>
            </div>
          </div>
        </section>
        <section>2</section>
        <section>3</section>
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
    <table className="w-full   border-[1px] border-black text-right">
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
        className="w-[4%] border-[1px] border-black text-center"
        scope="col"
        rowSpan={2}
      >
        {questionNumber}
      </th>
      <th
        className="h-8 border-[1px] border-black px-2"
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
      <th className="w-1/4 border-[1px] border-black px-2" scope="col">
        {choiceText}
      </th>
    </>
  );
}
