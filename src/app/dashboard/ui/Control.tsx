"use client";
import { Text } from "@/app/lib/TextComponents";
import { Accordion, AccordionItem, Card, Input } from "@nextui-org/react";
import { Pencil } from "lucide-react";
import React from "react";

const Control = () => {
  return (
    <>
      <Card className="w-1/2 p-8">
        <div className="flex cursor-pointer items-center gap-1">
          <Text>example exam</Text>
          <Pencil size={12} />
        </div>
        <Accordion variant="splitted">
          <AccordionItem key="1" aria-label="Accordion 1" title="Exam Header">
            <section className="flex flex-col gap-4  overflow-y-scroll"></section>
          </AccordionItem>
        </Accordion>
      </Card>
    </>
  );
};

export default Control;
