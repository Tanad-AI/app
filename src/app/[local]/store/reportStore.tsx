import { createId } from "@paralleldrive/cuid2";
import { create } from "zustand";
import { Field } from "../types/report.typs";

export interface StoreState {
  fields: Field[];
  setFields: (fields: Field[]) => void;
  activeField: Field;
  setActiveField: (field: Field) => void;
  updateDetailValue: (fieldId: string, detailId: string, value: string) => void;
}

const useReportStore = create<StoreState>((set) => ({
  fields: [
    {
      id: createId(),
      name: "cover",
      title: "الغلاف",
      details: [
        { id: createId(), detailName: "type", title: "النوع", value: "" },
        { id: createId(), detailName: "location", title: "الموقع", value: "" },
        { id: createId(), detailName: "title", title: "العنوان", value: "" },
        { id: createId(), detailName: "owner", title: "المالك", value: "" },
      ],
    },
    {
      id: createId(),
      name: "reportDetailsTable",
      title: "جدول التقرير",
      details: [
        {
          id: createId(),
          detailName: "projectName",
          title: "اسم المشروع",
          value: "",
        },
        {
          id: createId(),
          detailName: "ownerPlaintiff",
          title: "المالك / المدعي",
          value: "",
        },
        {
          id: createId(),
          detailName: "projectSubject",
          title: "موضوع التقرير",
          value: "",
        },
        { id: createId(), detailName: "city", title: "المدينة", value: "" },
        {
          id: createId(),
          detailName: "contractNumber",
          title: "رقم العقد",
          value: "",
        },
        { id: createId(), detailName: "day", title: "اليوم", value: "" },
        { id: createId(), detailName: "location", title: "الموقع", value: "" },
        {
          id: createId(),
          detailName: "contractDate",
          title: "تاريخ العقد",
          value: "",
        },
        { id: createId(), detailName: "date", title: "التاريخ", value: "" },
      ],
    },
    {
      id: createId(),
      name: "introductionText",
      title: "المقدمة",
      details: [
        { id: createId(), detailName: "value", title: "النص", value: "" },
      ],
      isTextArea: true,
    },
    {
      id: createId(),
      name: "attendees",
      title: "الحضور",
      details: [
        { id: createId(), detailName: "value", title: "القائمة", value: "" },
      ],
      isMultipleLines: true,
    },
    {
      id: createId(),
      name: "estateDescription",
      title: "معلومات العقار",
      details: [
        { id: createId(), detailName: "value", title: "الوصف", value: "" },
      ],
      isMultipleLines: true,
    },
    {
      id: createId(),
      name: "notes",
      title: "الملاحظات",
      details: [
        {
          id: createId(),
          detailName: "value",
          title: "النص",
          value: "",
          isTextArea: true,
        },
      ],
      isMultipleLines: true,
    },
    {
      id: createId(),
      name: "acknowledge",
      title: "إفادة",
      details: [
        {
          id: createId(),
          detailName: "value",
          title: "النص",
          value: "",
          isTextArea: true,
        },
      ],
      isMultipleLines: true,
    },
    {
      id: createId(),
      name: "regardsLine",
      title: "كلمة شكر",
      details: [
        {
          id: createId(),
          detailName: "value",
          title: "النص",
          value: "هذا ولكم منا كل الود و التقدير",
        },
      ],
    },
    {
      id: createId(),
      name: "companyName",
      title: "إسم الشركة",
      details: [
        { id: createId(), detailName: "value", title: "الإسم", value: "" },
      ],
    },
    {
      id: createId(),
      name: "customLine",
      title: "مخصص",
      details: [
        { id: createId(), detailName: "value", title: "النص", value: "" },
      ],
    },
  ],
  setFields: (newFields) => set({ fields: newFields }),
  activeField: {
    id: createId(),
    name: "cover",
    title: "الغلاف",
    details: [
      { id: createId(), detailName: "type", title: "النوع", value: "" },
      { id: createId(), detailName: "location", title: "الموقع", value: "" },
      { id: createId(), detailName: "title", title: "العنوان", value: "" },
      { id: createId(), detailName: "owner", title: "المالك", value: "" },
    ],
  },
  setActiveField: (newActiveField) => set({ activeField: newActiveField }),
  updateDetailValue: (fieldId, detailId, value) =>
    set((state) => ({
      fields: state.fields.map((field) =>
        field.id === fieldId
          ? {
              ...field,
              details: field.details.map((detail) =>
                detail.id === detailId ? { ...detail, value } : detail,
              ),
            }
          : field,
      ),
    })),
}));

export default useReportStore;
