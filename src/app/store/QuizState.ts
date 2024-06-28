import {
  QuestionsDataType,
  QuizHeaderFormDataType,
} from "@/app/create/lib/formsTypes";
import { create } from "zustand";
import { createId } from "@paralleldrive/cuid2";

type HeaderStore = {
  sections: any;
  setQuestionText: any;
  QuizFormHeaderDetails: QuizHeaderFormDataType;
  handleInputsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  QuestionsSections: QuestionsDataType[];
};

export const useQuizStore = create<any>((set: any) => ({
  //initial state
  QuizFormHeaderDetails: {
    subject: "",
    termSemester: "",
    class: "",
    country: "",
    numberOfMarks: null,
    dayOfTheExam: "",
    dateOfTheExam: "",
    durationInHours: null,
    type: "",
    instatuteName: "",
    countryDepartmentName: "",
    stateDepartmentName: "",
    teacherName: "",
    logo: [],
  },
  handleInputsChange: (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    // set function
    set((state: HeaderStore) => ({
      ...state,
      QuizFormHeaderDetails: {
        ...state.QuizFormHeaderDetails,
        [name]: value,
      },
    }));
  },
  questionsSections: [
    { name: "MCQs", title: "MCQs", added: false, questions: [] },
    {
      name: "trueOrFalse",
      title: "True or false",
      added: false,
      questions: [],
    },
    {
      name: "FillInTheBlank",
      title: "Fill in the blank",
      added: false,
      questions: [],
    },
  ],

  numberOfQuestions: { MCQs: "", trueOrFalse: "", FillInTheBlank: "" },

  setNumberOfQuestions: (newCounts: any) =>
    set((state: any) => ({
      numberOfQuestions: { ...state.numberOfQuestions, ...newCounts },
    })),

  addQuestions: (mcqsQuestion: any, otherQuestions: any) =>
    set((state: any) => {
      const updatedSections = [...state.questionsSections];
      const { MCQs, trueOrFalse, FillInTheBlank } = state.numberOfQuestions;

      for (let i = 0; i < +MCQs; i++) {
        updatedSections[0].questions = [
          ...updatedSections[0].questions,
          { ...mcqsQuestion, id: createId() },
        ];
      }
      for (let i = 0; i < +trueOrFalse; i++) {
        updatedSections[1].questions = [
          ...updatedSections[1].questions,
          otherQuestions,
          { ...mcqsQuestion, id: createId() }, // Assign unique ID
        ];
      }
      for (let i = 0; i < +FillInTheBlank; i++) {
        updatedSections[2].questions = [
          ...updatedSections[2].questions,
          otherQuestions,
          { ...mcqsQuestion, id: createId() }, // Assign unique ID
        ];
      }

      return {
        questionsSections: updatedSections,
        numberOfQuestions: { MCQs: "", trueOrFalse: "", FillInTheBlank: "" },
      };
    }),

  setQuestionsText: (
    sectionIndex: number,
    questionIndex: number,
    question: string,
  ) =>
    set((state: any) => {
      // Create a copy of the current questionsSections state
      const updatedQuestionsSections = [...state.questionsSections];

      // Create a copy of the specific section's questions
      const updatedQuestions = [
        ...updatedQuestionsSections[sectionIndex].questions,
      ];

      // Update the specific question's text
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        questionText: question,
      };

      // Update the section with the modified questions array
      updatedQuestionsSections[sectionIndex] = {
        ...updatedQuestionsSections[sectionIndex],
        questions: updatedQuestions,
      };

      // Return the new state
      return { questionsSections: updatedQuestionsSections };
    }),

  setChoicesText: (
    newChoiceText: string,
    sectionIndex: number,
    questionIndex: number,
    choiceIndex: number,
  ) =>
    set((state: any) => {
      // Create a copy of the current questionsSections state
      const updatedQuestionsSections = [...state.questionsSections];

      // Create a copy of the specific section's questions
      const updatedQuestions = [
        ...updatedQuestionsSections[sectionIndex].questions,
      ];

      // Create a copy of the specific question's choices
      const updatedChoices = [...updatedQuestions[questionIndex].choices];

      // Update the specific choice's text
      updatedChoices[choiceIndex] = {
        ...updatedChoices[choiceIndex],
        choiceText: newChoiceText,
      };

      // Update the question with the modified choices array
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        choices: updatedChoices,
      };

      // Update the section with the modified questions array
      updatedQuestionsSections[sectionIndex] = {
        ...updatedQuestionsSections[sectionIndex],
        questions: updatedQuestions,
      };

      // Return the new state
      return { questionsSections: updatedQuestionsSections };
    }),
  SectionQuestion: {
    MCQs: {
      text: "اختر الإجابة الصحيحة من بين الخيارات التالية:",
      marks: "",
    },
    trueOrFalse: {
      text: "اختر: صح أم خطأ للعبارة التالية:",
      marks: "",
    },
    FillInTheBlank: {
      text: "املأ الفراغ بالكلمة المناسبة:",
      marks: "",
    },
  },
  setSectionQuestion: (
    sectionName: string,
    questionText: string,
    field: "text" | "marks",
  ) =>
    set((state: any) => ({
      ...state,
      SectionQuestion: {
        ...state.SectionQuestion,
        [sectionName]: {
          [field]: questionText,
        },
      },
    })),
}));
