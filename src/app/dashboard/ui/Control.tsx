"use client";
import { Text } from "@/app/lib/TextComponents";
import { Accordion, AccordionItem, Card, Input } from "@nextui-org/react";
import { Pencil } from "lucide-react";
import React from "react";

const Control = () => {
  return (
    <>
      <Card className="w-full p-8">
        <div className="flex gap-1 items-center cursor-pointer">
          <Text>example exam</Text>
          <Pencil size={12} />
        </div>
        <br />
        <Accordion variant="splitted">
          <AccordionItem key="1" aria-label="Accordion 1" title="Exam Header">
            <section className="flex flex-col overflow-y-scroll  gap-4">
              <div className="flex  gap-4">
                <Input type="text" label="Subject" placeholder="Math" />
                <Input type="text" label="class" placeholder="Fouth grade" />
              </div>
              <div className="flex gap-4">
                <Input
                  type="text"
                  label="Semester"
                  placeholder="Enter your email"
                />
                <Input type="text" label="day" placeholder="Enter your email" />
              </div>
              <div className="flex gap-4">
                <Input
                  type="text"
                  label="Date"
                  placeholder="Enter your email"
                />
                <Input
                  type="text"
                  label="duration"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-4">
                <Input
                  type="text"
                  label="Number of pages"
                  placeholder="Enter your email"
                />
                <Input
                  type="text"
                  label="Number of marks"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex gap-4">
                <Input
                  type="text"
                  label="type"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-4">
                <Input
                  type="text"
                  label="type"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-4">
                <Input
                  type="text"
                  label="type"
                  placeholder="Enter your email"
                />
              </div>
            </section>
          </AccordionItem>
        </Accordion>
      </Card>
    </>
  );
};

export default Control;
