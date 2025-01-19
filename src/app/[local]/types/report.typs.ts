import { ComponentType, ReactElement } from "react";

export type DetailItem = {
  id: string;
  detailName: string;
  title: string;
  value: string;
  placeholder?: string;
  isTextArea?: boolean;
  images?: File[];
};

export type Field = {
  id: string;
  name: string;
  title: string;
  details: DetailItem[];
  icon?: (props: any) => void;
  isMultipleLines?: boolean;
};
