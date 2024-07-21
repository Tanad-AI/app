/* eslint-disable @next/next/no-img-element */
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
  return (
    <div
      ref={ref}
      dir="rtl"
      className={`__a4-page  flex  flex-col gap-5 bg-white ${
        varient == "normal" && "min-h-[297mm] w-[210mm] p-[20mm] "
      } `}
    >
      <table className="__table-border w-full">
        <tbody>
          <tr>
            <td>{QuizFormHeaderDetails.country}</td>
            <td className="items-center text-center" rowSpan={4}>
              <img
                className="mx-auto h-28 object-cover align-middle"
                src="images/logo.png"
                alt="logo goes here"
              />
            </td>
            <td>اليوم: {QuizFormHeaderDetails.dayOfTheExam}</td>
          </tr>
          <tr>
            <td>{QuizFormHeaderDetails.countryDepartmentName}</td>
            <td>التاريخ: {QuizFormHeaderDetails.dateOfTheExam}</td>
          </tr>
          <tr>
            <td>{QuizFormHeaderDetails.stateDepartmentName}</td>
            <td>الزمن: {QuizFormHeaderDetails.durationInHours}</td>
          </tr>
          <tr>
            <td>{QuizFormHeaderDetails.instatuteName}</td>
            <td>عدد الصفحات:</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <span>
                اختبار الفصل الدراسي
                <span> {QuizFormHeaderDetails.termSemester} </span>
                لمادة
                <span> {QuizFormHeaderDetails.subject} </span>
                (الفترة الأولى) للصف
                <span> {QuizFormHeaderDetails.class} </span>
                للعام الدراسي 1445هـ
              </span>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <span>
                اسم
                الطالب..........................................................
              </span>
              {"    "}
              <span> رقم الجلوس............................</span>
            </td>
          </tr>
        </tbody>
      </table>

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
