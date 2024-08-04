import { Accordion, AccordionItem, Card } from "@nextui-org/react";
import { Text } from "../lib/TextComponents";
import { ReactNode } from "react";

type CustomAccordionType = {
  title: string;
  index: number;
  children: ReactNode;
};

function CustomAccordion({ title, index, children }: CustomAccordionType) {
  return (
    <Accordion variant="splitted" className="__accordion-btn ">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        className="__shadow-none border-forground border-[1px]"
        classNames={{
          startContent: "h-10 w-10 shadow-none",
          title: "text-sm font-medium",
        }}
        title={title}
        startContent={
          <Card className="size-full rounded-md bg-secondary">
            <Text className="my-auto font-bold">{index}</Text>
          </Card>
        }
      >
        {children}
      </AccordionItem>
    </Accordion>
  );
}

export default CustomAccordion;
