import { useRef, useState } from "react";
import { useQuizStore } from "../store/QuizState";
import CustomAccordion from "./CustomAccordion";
import { Input } from "@nextui-org/react";
import { Text } from "../lib/TextComponents";
import DragAndDropImageUpload from "@/components/DragAndDropImage";

type PropsType = {
  label: string;
  name: string;
  content: ContentType[];
  i: number;
};

type ContentType = {
  label: string;
  name: string;
  type: string;
};
function ControlAccordion({ label, name, content, i }: PropsType) {
  const { handleInputsChange } = useQuizStore();

  const [inputData, setInputData] = useState<String>();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <CustomAccordion title={label} index={i + 1}>
      <section className="flex flex-col gap-2">
        {content.map((input: ContentType) => {
          return (
            <div className="flex flex-col gap-[2px]" key={input.name}>
              <Text>{input.label}</Text>
              {input.type == "file" ? (
                <DragAndDropImageUpload />
              ) : (
                <Input
                  ref={inputRef}
                  labelPlacement="outside"
                  placeholder="ادخل التفاصيل"
                  className="placeholder-slate-500"
                  variant="bordered"
                  name={input.name as string}
                  onChange={(e) => handleInputsChange(e)}
                  value={inputData as string}
                ></Input>
              )}
            </div>
          );
        })}
      </section>
    </CustomAccordion>
  );
}

export default ControlAccordion;
