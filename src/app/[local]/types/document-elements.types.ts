export type choiceType = {
  choiceText: string;
  isTrue: boolean;
  id: string;
};
export type QuestionType = {
  id: string;
  questionText: string;
  answer: string;
  placeholder?: string;
  choices: choiceType[];
  explanation: string;
  type: string;
  image: string[];
  createdAt?: string;
  updatedAt?: string;
};
export type SectionsData = {
  id: string;
  name: string;
  title: string;
  added: boolean;
  questions: QuestionType[];
};

export type QuizDetailsFormTypes = {
  subject: string;
  termSemester: string;
  class: string;
  numberOfMarks: number | null;
  dayOfTheExam: string;
  dateOfTheExam: string;
  durationInHours: number | null;
  type: string;
};

export type InstatuteDetailsFromType = {
  instatuteName: string;
  countryDepartmentName: string;
  stateDepartmentName: string;
  teacherName: string;
  logo: any;
};

export type questionsDetailsFormTypes = {
  numberOfQuestions: number | null;
  questionsLanguage: string;
  MCQs: number | null;
  trueOrFalse: number | null;
  fillInTheBlank: number | null;
  defineThefollowing: number | null;
  writeShortAnswer: number | null;
};

export type QuizHeaderFormDataType = {
  country: string;
  subject: string;
  termSemester: string;
  class: string;
  numberOfMarks: number | null;
  dayOfTheExam: string;
  dateOfTheExam: string;
  durationInHours: number | null;
  type: string;
  instatuteName: string;
  countryDepartmentName: string;
  stateDepartmentName: string;
  teacherName: string;
  logo: any;
};
