import { createId } from "@paralleldrive/cuid2";
import { create } from "zustand";
import { Field } from "../types/report.typs";
import { Image } from "lucide-react";

export interface StoreState {
  fields: Field[];
  setFields: (fields: Field[]) => void;
  activeField: Field;
  setActiveField: (field: Field) => void;
  setImages: (imgs: File[]) => void;
  updateFieldDetail: (
    fieldId: string,
    detailId: string,
    newValue: string,
  ) => void;
  reportImages: string[];
  setReportImages: (newImages: string[]) => void;
  reportName: string;
  setReportName: (newName: string) => void;
  componentRef: React.RefObject<HTMLElement> | null;
  setComponentRef: (ref: React.RefObject<HTMLElement>) => void;
}

const useReportStore = create<StoreState>((set) => ({
  fields: [
    {
      id: createId(),
      name: "cover",
      title: "الغلاف",
      details: [
        {
          id: createId(),
          detailName: "type",
          title: "النوع",
          value: "",
          placeholder: "تقرير ندب خبرة",
        },
        {
          id: createId(),
          detailName: "location",
          title: "الموقع",
          value: "",
          placeholder: "حي الزهور",
        },
        {
          id: createId(),
          detailName: "title",
          title: "عنوان التقرير",
          value: "",
          placeholder: "معاينة أضرار مبنى قايم",
        },
        {
          id: createId(),
          detailName: "owner",
          title: "المالك",
          value: "",
          placeholder: "فلان الفلاني",
        },
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
          placeholder: "عمارة سكنية",
        },
        {
          id: createId(),
          detailName: "ownerPlaintiff",
          title: "المالك / المدعي",
          value: "",
          placeholder: "فلان الفلاني",
        },
        {
          id: createId(),
          detailName: "projectSubject",
          title: "موضوع التقرير",
          value: "",
          placeholder: "الشخوص للعقار محل الدعوى...",
        },
        {
          id: createId(),
          detailName: "city",
          title: "المدينة",
          value: "",
          placeholder: "الرياض",
        },
        {
          id: createId(),
          detailName: "contractNumber",
          title: "رقم العقد",
          value: "",
          placeholder: "12345678",
        },
        {
          id: createId(),
          detailName: "day",
          title: "اليوم",
          value: "",
          placeholder: "الأحد",
        },
        {
          id: createId(),
          detailName: "location",
          title: "الموقع",
          value: "",
          placeholder: "حي الزهور",
        },
        {
          id: createId(),
          detailName: "contractDate",
          title: "تاريخ العقد",
          value: "",
          placeholder: "م2024/12/3",
        },
        {
          id: createId(),
          detailName: "date",
          title: "التاريخ",
          value: "",
          placeholder: "م2024/12/3",
        },
      ],
    },
    {
      id: createId(),
      name: "introductionText",
      title: "المقدمة",
      details: [
        {
          id: createId(),
          detailName: "value",
          title: "النص",
          value: "",
          content: "",
          isTextArea: true,
        },
      ],
    },
    {
      id: createId(),
      name: "attendees",
      title: "الحضور",
      details: [
        {
          id: createId(),
          detailName: "value",
          title: "القائمة",
          value: "",
          isTextArea: true,
        },
      ],
    },
    {
      id: createId(),
      name: "estateDescription",
      title: "مكونات العقار",
      details: [
        {
          id: createId(),
          detailName: "value",
          title: "الوصف",
          value: "",
          isTextArea: true,
        },
      ],
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
        {
          id: createId(),
          detailName: "value",
          title: "الإسم",
          value: "",
          placeholder: "",
        },
      ],
    },
    {
      id: createId(),
      name: "images",
      title: "الصور",
      details: [
        {
          id: createId(),
          detailName: "images",
          title: "الصور",
          value: "",
          images: [],
        },
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
  updateFieldDetail: (fieldId, detailId, newValue) =>
    set((state) => ({
      fields: state.fields.map((field) =>
        field.id === fieldId
          ? {
              ...field,
              details: field.details.map((detail) =>
                detail.id === detailId
                  ? { ...detail, value: newValue }
                  : detail,
              ),
            }
          : field,
      ),
    })),
  setImages: (imgs) => {
    set((state) => ({
      fields: state.fields.map((field) =>
        field.details[0].images
          ? {
              ...field,
              details: field.details.map((detail) => ({
                ...detail,
                images: imgs,
              })),
            }
          : field,
      ),
    }));
  },
  reportImages: [],
  setReportImages: (newImages: string[]) => set({ reportImages: newImages }),
  reportName: "Untitled Report",
  setReportName: (newName: string) => set({ reportName: newName }),
  componentRef: null,
  setComponentRef: (ref) => set({ componentRef: ref }),
}));

export default useReportStore;
