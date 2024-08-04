import { create } from "zustand";
import { createId } from "@paralleldrive/cuid2";
import {
  QuizHeaderFormDataType,
  SectionsData,
} from "../types/document-elements.types";

interface Question {
  text: string;
  marks: string;
}
interface SectionQuestionType {
  MCQs: Question;
  trueOrFalse: Question;
  FillInTheBlank: Question;
}
type storeType = {
  sections: SectionsData[];
  setQuestionText: (
    sectionIndex: number,
    questionIndex: number,
    question: string,
  ) => void;
  QuizFormHeaderDetails: QuizHeaderFormDataType;
  handleInputsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  questionsSections: SectionsData[];
  numberOfQuestions: {
    MCQs: string;
    trueOrFalse: string;
    FillInTheBlank: string;
  };

  setNumberOfQuestions: (newCounts: {
    MCQs?: string;
    trueOrFalse?: string;
    FillInTheBlank?: string;
  }) => void;

  addQuestions: (
    mcqsQuestion: any,
    otherQuestions: any,
    TOrFQuestion: any,
  ) => void;

  setQuestionsText: (
    sectionIndex: number,
    questionIndex: number,
    question: string,
  ) => void;
  setChoicesText: (
    newChoiceText: string,
    sectionIndex: number,
    questionIndex: number,
    choiceIndex: number,
  ) => void;
  SectionQuestion: SectionQuestionType;
  setSectionQuestion: (
    sectionName: keyof SectionQuestionType,
    questionText: string,
    field: keyof Question,
  ) => void;
  setNewQuestions: (newQuestions: any, sectionIndex: number) => void;
  a4Page: HTMLDivElement | null;
  setA4Page: (element: HTMLDivElement) => void;
  documentName: string;
  setDocumentName: (inputValue: string) => void;
  examLogo: string;
  setExamLogo: (image: string) => void;
  examDirection: "ltr" | "rtl";
  setExamDirection: (direction: "ltr" | "rtl") => void;
};

export const useQuizStore = create<storeType>((set) => ({
  // initial state
  sections: [],
  setQuestionText: () => {}, // Provide a dummy implementation or the actual one
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
    logo: null,
  },
  handleInputsChange: (event) => {
    const { name, value } = event.target;
    // set function
    set((state) => ({
      ...state,
      QuizFormHeaderDetails: {
        ...state.QuizFormHeaderDetails,
        [name]: value,
      },
    }));
  },
  questionsSections: [
    { name: "MCQs", title: "MCQs", added: false, questions: [], id: "" },
    {
      name: "trueOrFalse",
      title: "True or false",
      added: false,
      questions: [],
      id: "",
    },
    {
      name: "FillInTheBlank",
      title: "Fill in the blank",
      added: false,
      questions: [],
      id: "",
    },
  ],
  numberOfQuestions: { MCQs: "", trueOrFalse: "", FillInTheBlank: "" },
  setNumberOfQuestions: (newCounts) =>
    set((state) => ({
      numberOfQuestions: { ...state.numberOfQuestions, ...newCounts },
    })),
  addQuestions: (mcqsQuestion, otherQuestions, TOrFQuestion) =>
    set((state) => {
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
          { ...TOrFQuestion, id: createId() }, // Assign unique ID
        ];
      }
      for (let i = 0; i < +FillInTheBlank; i++) {
        updatedSections[2].questions = [
          ...updatedSections[2].questions,
          { ...otherQuestions, id: createId() }, // Assign unique ID
        ];
      }

      return {
        questionsSections: updatedSections,
        numberOfQuestions: { MCQs: "", trueOrFalse: "", FillInTheBlank: "" },
      };
    }),
  setQuestionsText: (sectionIndex, questionIndex, question) =>
    set((state) => {
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
  setChoicesText: (newChoiceText, sectionIndex, questionIndex, choiceIndex) =>
    set((state) => {
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
  setSectionQuestion: (sectionName, questionText, field) =>
    set((state) => ({
      ...state,
      SectionQuestion: {
        ...state.SectionQuestion,
        [sectionName]: {
          [field]: questionText,
        },
      },
    })),
  setNewQuestions: (newQuestions, sectionIndex) =>
    set((state) => {
      const updatedQuestions = [...state.questionsSections];
      updatedQuestions[sectionIndex].questions = newQuestions;
      return { questionsSections: updatedQuestions };
    }),
  a4Page: null,
  setA4Page: (element) => {
    set(() => ({
      a4Page: element,
    }));
  },
  documentName: "Untitled document",
  setDocumentName: (inputValue) => {
    set(() => ({
      documentName: inputValue,
    }));
  },
  examLogo: "",
  setExamLogo: (image) => {
    set(() => ({
      examLogo: image,
    }));
  },
  examDirection: "rtl",
  setExamDirection: (direction) => {
    set(() => ({
      examDirection: direction,
    }));
  },
}));
