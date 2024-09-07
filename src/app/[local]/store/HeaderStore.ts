import create from "zustand";
import {
  getInitialOtherStudentsButtons,
  getInitialStudentsInputs,
  getInitialTeacherButtons,
  getInititalTeacherInputs,
} from "../lib/useExamHeaderInitialState";

// type PlacementOnPaper =
//   | "instatute_section"
//   | "exam_details_section"
//   | "exam_title"
//   | "notes_section"
//   | "logo_section";
type ValueField = {
  en: string;
  ar: string;
};

interface InputField {
  name: string;
  placeholder_text: string;
  value_field: ValueField;
  inputValue: string;
  title: string;
  isAdded: boolean;
  placementOnPaper: string;
}

interface StoreState {
  pageLanguage: "ar" | "en";
  setPageLanguage: (language: "ar" | "en") => void;
  examLanguage: "ar" | "en";
  setExamLanguage: (language: "ar" | "en") => void;
  teacherInputs: InputField[];
  teacherButtons: InputField[];
  studentInputs: InputField[];
  studentButtons: InputField[];
  setTeacherInputs: (inputs: InputField[]) => void;
  setTeacherButtons: (buttons: InputField[]) => void;
  setStudentInputs: (inputs: InputField[]) => void;
  setStudentButtons: (buttons: InputField[]) => void;
  addTeacherField: (field: InputField) => void;
  removeTeacherField: (field: InputField) => void;
  addStudentField: (field: InputField) => void;
  removeStudentField: (field: InputField) => void;
  moveFieldUp: (field: InputField, isTeacher: boolean) => void;
  moveFieldDown: (field: InputField, isTeacher: boolean) => void;
}

export const useExamHeaderStore = create<StoreState>((set) => ({
  pageLanguage: "en",
  setPageLanguage: (language) =>
    set((state) => ({
      pageLanguage: language,
    })),
  examLanguage: "en",
  setExamLanguage: (language) =>
    set((state) => ({
      examLanguage: language,
    })),
  teacherInputs: getInititalTeacherInputs("en", "en"),
  teacherButtons: getInitialTeacherButtons("en", "en"),
  studentInputs: getInitialStudentsInputs("en", "en"),
  studentButtons: getInitialOtherStudentsButtons("en", "en"),
  setTeacherInputs: (inputs) => set({ teacherInputs: inputs }),
  setTeacherButtons: (buttons) => set({ teacherButtons: buttons }),
  setStudentInputs: (inputs) => set({ studentInputs: inputs }),
  setStudentButtons: (buttons) => set({ studentButtons: buttons }),
  addTeacherField: (field) =>
    set((state) => ({
      teacherInputs: [...state.teacherInputs, field],
      teacherButtons: state.teacherButtons.filter(
        (item) => item.name !== field.name,
      ),
    })),
  removeTeacherField: (field) =>
    set((state) => ({
      teacherInputs: state.teacherInputs.filter(
        (input) => input.name !== field.name,
      ),
      teacherButtons: [...state.teacherButtons, field],
    })),
  addStudentField: (field) =>
    set((state) => ({
      studentInputs: [...state.studentInputs, field],
      studentButtons: state.studentButtons.filter(
        (item) => item.name !== field.name,
      ),
    })),
  removeStudentField: (field) =>
    set((state) => ({
      studentInputs: state.studentInputs.filter(
        (input) => input.name !== field.name,
      ),
      studentButtons: [...state.studentButtons, field],
    })),
  moveFieldUp: (field, isTeacher) =>
    set((state) => {
      const key = isTeacher ? "teacherInputs" : "studentInputs";
      const fields = state[key] as InputField[];
      const index = fields.findIndex((f) => f.name === field.name);
      if (index > 0) {
        const newFields = [...fields];
        [newFields[index - 1], newFields[index]] = [
          newFields[index],
          newFields[index - 1],
        ];
        return { [key]: newFields };
      }
      return {};
    }),
  moveFieldDown: (field, isTeacher) =>
    set((state) => {
      const key = isTeacher ? "teacherInputs" : "studentInputs";
      const fields = state[key] as InputField[];
      const index = fields.findIndex((f) => f.name === field.name);
      if (index < fields.length - 1) {
        const newFields = [...fields];
        [newFields[index + 1], newFields[index]] = [
          newFields[index],
          newFields[index + 1],
        ];
        return { [key]: newFields };
      }
      return {};
    }),
}));
