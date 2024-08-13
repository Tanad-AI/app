import create from "zustand";
import {
  initialDefaultStudentsFields,
  initialDefaultTeacherFields,
  initialOtherStudentsFields,
  initialOtherTeacherFields,
} from "../lib/ExamHeaderInitialState";

interface InputField {
  name: string;
  placeholder_text: string;
  value_field: string;
  inputValue: string;
  title: string;
  isAdded: boolean;
}

interface StoreState {
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
  teacherInputs: initialDefaultTeacherFields,
  teacherButtons: initialOtherTeacherFields,
  studentInputs: initialDefaultStudentsFields,
  studentButtons: initialOtherStudentsFields,
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
