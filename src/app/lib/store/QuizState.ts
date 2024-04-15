import { QuizHeaderFormDataType } from "@/app/create/lib/formsTypes";
import { create } from "zustand";

type HeaderStore = {
  QuizFormHeaderDetails: QuizHeaderFormDataType;
  handleInputsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useQuizHeaderStore = create<HeaderStore>((set) => ({
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
}));
