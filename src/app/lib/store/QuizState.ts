import { QuizHeaderFormDataType } from "@/app/create/lib/formsTypes";
import { create } from "zustand";

type HeaderStore = {
  QuizFormHeaderDetails: QuizHeaderFormDataType;
  handleInputsChange: () => void;
};

export const useQuizHeaderStore = create((set) => ({
  QuizFormHeaderDetails: {
    subject: "",
    termSemester: "",
    class: "",
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
    set((state: HeaderStore) => ({
      ...state,
      QuizFormHeaderDetails: {
        ...state.QuizFormHeaderDetails,
        [name]: value,
      },
    }));
  },
}));
