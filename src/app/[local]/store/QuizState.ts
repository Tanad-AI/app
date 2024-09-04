/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";
import { createId } from "@paralleldrive/cuid2";
import {
  QuestionType,
  QuizHeaderFormDataType,
  SectionsData,
  choiceType,
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
  examLanguage: "ar" | "en";
  setExamLanguage: (language: "ar" | "en") => void;
  examQuestionsSections: SectionsData[];
  setExamQuestionsSection: (
    questions: SectionsData,
    newQuestion: QuestionType,
    times: number,
  ) => void;
  setChoiceAsTrue: (
    checked: boolean,
    questionId: string,
    choiceIndex: number,
    sectionName: string,
  ) => void;
};
export const useQuizStore = create<storeType>((set) => ({
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
  numberOfQuestions: { MCQs: "", trueOrFalse: "", FillInTheBlank: "" },
  setNumberOfQuestions: (newCounts) =>
    set((state) => ({
      numberOfQuestions: { ...state.numberOfQuestions, ...newCounts },
    })),

  setQuestionsText: (sectionIndex, questionIndex, question) =>
    set((state) => {
      // Create a copy of the current questionsSections state
      const updatedQuestionsSections = [...state.examQuestionsSections];

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
      return { examQuestionsSections: updatedQuestionsSections };
    }),
  setChoicesText: (newChoiceText, sectionIndex, questionIndex, choiceIndex) =>
    set((state) => {
      // Create a copy of the current questionsSections state
      const updatedQuestionsSections = [...state.examQuestionsSections];

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
      return { examQuestionsSections: updatedQuestionsSections };
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
      const updatedQuestions = [...state.examQuestionsSections];
      updatedQuestions[sectionIndex].questions = newQuestions;
      return { examQuestionsSections: updatedQuestions };
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
  examLanguage: "en",
  setExamLanguage: (language) => {
    set(() => ({
      examLanguage: language,
    }));
  },
  examQuestionsSections: [],
  setExamQuestionsSection: (newSection, newQuestion, times) =>
    set((state) => {
      const existingSection = state.examQuestionsSections.find(
        (section) => section.name === newSection.name,
      );

      let updatedSections;

      // If the section does not exist, add it once
      if (!existingSection) {
        updatedSections = [
          ...state.examQuestionsSections,
          {
            ...newSection,
            questions: Array(times)
              .fill("")
              .map(() => ({
                ...newQuestion,
                id: createId(),
              })),
          },
        ];
      } else {
        // If the section exists, update the questions in that section
        updatedSections = state.examQuestionsSections.map((section) =>
          section.name === newSection.name
            ? {
                ...section,
                questions: [
                  ...section.questions,
                  ...Array(times)
                    .fill(null)
                    .map(() => ({ ...newQuestion, id: createId() })),
                ],
              }
            : section,
        );
      }

      return {
        examQuestionsSections: updatedSections,
      };
    }),

  setChoiceAsTrue: (checked, questionId, choiceIndex, sectionName) =>
    set((state) => {
      // Copy the sections array to maintain immutability
      const sections = [...state.examQuestionsSections];

      // Find the specific section by name
      const currentSection = sections.find((item) => item.name === sectionName);

      // Find the specific question within that section by ID
      const currentQuestion = currentSection?.questions.find(
        (item) => item.id === questionId,
      );

      if (currentQuestion) {
        // Set all choices' isTrue to false before setting the selected one to true
        currentQuestion.choices.forEach((choice) => (choice.isTrue = false));

        // Set the specific choice's isTrue property to true
        currentQuestion.choices[choiceIndex].isTrue = true;

        // You can also update other properties like `choice` and `checked` if needed
        currentQuestion.choices[choiceIndex].isTrue = checked;
      }

      // Return the updated state
      return {
        examQuestionsSections: sections, // Return the updated sections array
      };
    }),
}));
