/* eslint-disable @next/next/no-img-element */
import { useQuizStore } from "@/app/[local]/store/QuizState";
import MCQsQuestion from "@/app/[local]/ui/MCQsQuestion";
import examLanguage from "@/lib/examLanguage";
import { usePathname } from "next/navigation";

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
  const pathName = usePathname();
  const language: "en" | "ar" = pathName.slice(1, 3);

  const {
    country,
    countryDepartmentName,
    stateDepartmentName,
    instatuteName,
    dayOfTheExam,
    dateOfTheExam,
    durationInHours,
  } = QuizFormHeaderDetails;

  const instatuteInfo = [
    country,
    countryDepartmentName,
    stateDepartmentName,
    instatuteName,
  ];
  const examDetailsInfo = [
    {
      title: examLanguage[language].day,
      text: dayOfTheExam,
    },
    {
      title: examLanguage[language].date,
      text: dateOfTheExam,
    },
    {
      title: examLanguage[language].time,
      text: durationInHours,
    },
    {
      title: examLanguage[language].pages,
      text: "",
    },
  ];

  return (
    <div
      ref={ref}
      dir={examDirection}
      className={`__a4-page  flex  flex-col gap-5 bg-white ${
        varient == "normal" && "min-h-[297mm] w-[210mm] p-[20mm] "
      } `}
    >
      <div className="grid  w-full grid-cols-3  border-[1px] border-black">
        <section className="border-e-[1px] border-black">
          {instatuteInfo.map((info, i) => {
            return (
              info && (
                <div
                  key={i}
                  className="h-6 border-b-[1px] border-black ps-2 last:border-none"
                >
                  {info}
                </div>
              )
            );
          })}
        </section>
        <section className="border-e-[1px] border-black">
          <div className="items-center p-3 text-center">
            {examLogo == "" ? (
              <div className="flex  items-center justify-center ">
                {examLanguage[language].logoPlaceHolder}
              </div>
            ) : (
              <img
                className="mx-auto max-h-16  object-cover align-middle"
                src={examLogo}
                alt={examLanguage[language].logoPlaceHolder}
              />
            )}
          </div>
        </section>
        <section className="">
          {examDetailsInfo.map((info, i) => {
            return (
              info && (
                <div className="h-6 border-b-[1px] border-black ps-2 last:border-none">
                  {info.title}: {info.text}
                </div>
              )
            );
          })}
        </section>
        <section className="col-span-3 border-y-[1px] border-black ps-2">
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
        </section>
        <section className="col-span-3 ps-2">
          <div>
            <span>
              {examLanguage[language].studentName}
              .........................................................
            </span>
            {"    "}
            <span>
              {" "}
              {examLanguage[language].studentId}............................
            </span>
          </div>
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
