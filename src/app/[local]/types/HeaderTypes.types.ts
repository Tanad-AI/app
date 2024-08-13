export interface InputField {
  name: string;
  placeholder_text: string;
  value_field: string;
  inputValue: string;
  title: string;
  isAdded: boolean;
}

export interface TeachersInput {
  teachers_input: InputField[];
}

export interface StudentsInput {
  students_input: InputField[];
}

export interface ExamInterface extends TeachersInput, StudentsInput {}
