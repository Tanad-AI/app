/* eslint-disable @next/next/no-img-element */
import { useQuizStore } from "@/app/store/QuizState";
import MCQsQuestion from "@/app/ui/MCQsQuestion";

const ExamPaper = ({
  QuizFormHeaderDetails,
  questionsSections,
  SectionQuestion,
  varient,
  ref,
}: {
  QuizFormHeaderDetails: any;
  questionsSections: any;
  SectionQuestion: any;
  varient: "print" | "normal";
  ref?: any;
}) => {
  const examLogo = useQuizStore((state) => state.examLogo);
  const examDirection = useQuizStore((state) => state.examDirection);

  return (
    <div
      ref={ref}
      dir={examDirection}
      className={`__a4-page  flex  flex-col gap-5 bg-white ${
        varient == "normal" && "min-h-[297mm] w-[210mm] p-[20mm] "
      } `}
    >
      {/* <div className="grid w-full grid-cols-3 border-[1px]">
        <div>
          <div>{QuizFormHeaderDetails.country}</div>
          <div className="items-center p-3 text-center">
            {examLogo == "" ? (
              <div className="flex h-full items-center justify-center ">
                logo goes here
              </div>
            ) : (
              <img
                className="mx-auto h-28  object-cover align-middle"
                src={examLogo}
                alt="logo goes here"
              />
            )}
          </div>
          <div>اليوم: {QuizFormHeaderDetails.dayOfTheExam}</div>
        </div>
        <div>
          <div>{QuizFormHeaderDetails.countryDepartmentName}</div>
          <div>التاريخ: {QuizFormHeaderDetails.dateOfTheExam}</div>
        </div>
        <div>
          <div>{QuizFormHeaderDetails.stateDepartmentName}</div>
          <div>الزمن: {QuizFormHeaderDetails.durationInHours}</div>
        </div>
        <div>
          <div>{QuizFormHeaderDetails.instatuteName}</div>
          <div>عدد الصفحات:</div>
        </div>
        <div>
          <div>
            <span>
              اختبار الفصل الدراسي
              <span> {QuizFormHeaderDetails.termSemester} </span>
              لمادة
              <span> {QuizFormHeaderDetails.subject} </span>
              (الفترة الأولى) للصف
              <span> {QuizFormHeaderDetails.class} </span>
              للعام الدراسي 1445هـ
            </span>
          </div>
        </div>
        <div>
          <div>
            <span>
              اسم
              الطالب..........................................................
            </span>
            {"    "}
            <span> رقم الجلوس............................</span>
          </div>
        </div>
      </div> */}

      <div className="grid w-full grid-cols-3 border-[1px] border-black">
        <section>
          <div>{QuizFormHeaderDetails.country}</div>
          <div>{QuizFormHeaderDetails.countryDepartmentName}</div>
          <div>{QuizFormHeaderDetails.stateDepartmentName}</div>
          <div>{QuizFormHeaderDetails.instatuteName}</div>
        </section>
        <section>
          <div className="items-center p-3 text-center">
            {examLogo == "" ? (
              <div className="flex h-full items-center justify-center ">
                logo goes here
              </div>
            ) : (
              <img
                className="mx-auto h-28  object-cover align-middle"
                src={examLogo}
                alt="logo goes here"
              />
            )}
          </div>
        </section>
        <section>
          <div>اليوم: {QuizFormHeaderDetails.dayOfTheExam}</div>
          <div>التاريخ: {QuizFormHeaderDetails.dateOfTheExam}</div>
          <div>الزمن: {QuizFormHeaderDetails.durationInHours}</div>
        </section>
      </div>

      {questionsSections.map(
        (section: any) =>
          section.questions.length !== 0 && (
            <div key={section.name}>
              <div>{SectionQuestion[section.name].text}</div>
              <div className="space-y-4">
                {section.questions.map((question: any, i: number) => (
                  <MCQsQuestion
                    key={question.id}
                    index={i + 1}
                    Choices={question.choices}
                    questionText={question.questionText}
                  />
                ))}
              </div>
            </div>
          ),
      )}
    </div>
  );
};

export default ExamPaper;
