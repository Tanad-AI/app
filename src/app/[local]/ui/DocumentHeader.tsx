import React from "react";
import { Text, TinyText } from "../lib/TextComponents";
import { Card, Spacer } from "@nextui-org/react";
import ControlAccordion from "./ControlAccordion";
import { useTranslations } from "next-intl";

interface HeaderInfoType {
  label: string;
  name: string;
  content: HeaderContentType[];
}
type HeaderContentType = {
  label: string;
  placeholder: string;
  type: string;
  name: string;
  required?: boolean;
};

const headerInfo: HeaderInfoType[] = [
  {
    label: "Instatute Details",
    name: "instatuteDetails",
    content: [
      {
        label: "School/College Name",
        placeholder: "Harvard",
        type: "text",
        name: "instatuteName",
      },
      {
        label: "Country",
        placeholder: "Harvard",
        type: "text",
        name: "country",
      },
      {
        label: "State Deparment Name",
        placeholder: "New york",
        type: "text",
        name: "stateDepartmentName",
      },
      {
        label: "Ministry / Department name",
        placeholder: "12 grade",
        type: "text",
        name: "countryDepartmentName",
      },
      {
        label: "Teacher's Name",
        placeholder: "20",
        type: "text",
        name: "teacherName",
      },
      {
        label: "Logo",
        placeholder: "School logo",
        type: "file",
        name: "logo",
      },
    ],
  },
  {
    label: "Document Details",
    name: "documentDetails",
    content: [
      {
        label: "subject",
        placeholder: "history",
        name: "subject",
        type: "text",
        required: true,
      },
      {
        label: "Term / Semester",
        placeholder: "Second",
        name: "termSemester",
        type: "text",
        required: true,
      },
      {
        label: "Class",
        placeholder: "12 grade",
        name: "class",
        type: "text",
        required: true,
      },
      {
        label: "Type",
        placeholder: "Final",
        name: "type",
        type: "text",
        required: true,
      },
      {
        label: "Number of Marks",
        placeholder: "20",
        name: "numberOfMarks",
        type: "number",
        required: false,
      },
      {
        label: "Day of the exam",
        placeholder: "Monday",
        name: "dayOfTheExam",
        type: "text",
        required: false,
      },
      {
        label: "Date of the exam",
        placeholder: "12-4-2023",
        name: "dateOfTheExam",
        type: "text",
        required: false,
      },
      {
        label: "Duration in hours",
        placeholder: "2 hours",
        name: "durationInHours",
        type: "number",
        required: false,
      },
    ],
  },
];

const DocumentHeader = () => {
  const t = useTranslations("Create");
  return (
    <div className="h-full">
      <div className="flex cursor-pointer items-baseline gap-1">
        <Text>{t("header")}</Text>
      </div>
      <Spacer y={2} />
      <Card
        radius="sm"
        shadow="none"
        className="flex min-h-full  flex-col  pb-8"
      >
        {headerInfo.map((item, i) => {
          return (
            <div key={i}>
              <ControlAccordion
                i={i}
                label={item.label}
                name={item.name}
                content={item.content}
              />
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default DocumentHeader;
