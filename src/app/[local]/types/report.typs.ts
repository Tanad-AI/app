export type DetailItem = {
  id: string;
  detailName: string;
  title: string;
  value: string;
  isTextArea?: boolean;
};

export type Field = {
  id: string;
  name: string;
  title: string;
  details: DetailItem[];
  isMultipleLines?: boolean;
};
