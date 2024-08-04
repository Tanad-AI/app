"use client";

import React from "react";
import {
  Button,
  Card,
  Divider,
  Select,
  SelectItem,
  Spacer,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { Paragraph, Text } from "@/app/[local]/lib/TextComponents";
import { AlignLeft, AlignRight, Globe } from "lucide-react";
import { useQuizStore } from "@/app/[local]/store/QuizState";

function Sidebar({ activeControlView, setActiveControlView }: any) {
  const controlsButtons = ["header", "questions", "footer"];
  const setExamDirection = useQuizStore((state) => state.setExamDirection);
  const examDirection = useQuizStore((state) => state.examDirection);
  return (
    <div className="hidden  min-w-[260px] flex-col space-y-2 md:block   lg:w-[28%]">
      <Text>Control</Text>
      <Card radius="sm" className=" px-6 py-3 shadow-sm ">
        <Tabs
          color="primary"
          size="sm"
          radius="sm"
          classNames={{
            tabList: "w-full shadow-none p-0",
            cursor: "rounded-none p-0",
          }}
        >
          <Tab key="content" className="flex flex-col" title="Content">
            <Spacer y={3} />
            <div className="flex w-full flex-col gap-3">
              {controlsButtons.map((button, i) => (
                <Button
                  size="md"
                  key={button}
                  radius="sm"
                  onClick={() => setActiveControlView(i)}
                  variant="shadow"
                  className={`w-full border-[1.5px] border-black/10 bg-transparent capitalize shadow-md ${
                    activeControlView === i &&
                    "bg-primary/15 font-semibold text-primary "
                  }`}
                >
                  {button}
                </Button>
              ))}
            </div>
          </Tab>
          <Tab key="Customize" className="flex flex-col" title="Customize">
            <Spacer y={3} />
            <div className="flex w-full flex-col gap-3">
              <section className="space-y-2">
                <Paragraph>Exam language</Paragraph>
                <Select
                  placeholder="Select an language"
                  labelPlacement="outside"
                  className="max-w-28"
                  selectorIcon={<Globe opacity={0.7} />}
                  defaultSelectedKeys={["english"]}
                >
                  <SelectItem value="arabic" key={"arabic"}>
                    arabic
                  </SelectItem>
                  <SelectItem value="english" key={"english"}>
                    english
                  </SelectItem>
                </Select>
                <Divider />
              </section>
              <section className="space-y-2">
                <Paragraph>Alignment</Paragraph>
                <div className="space-x-3">
                  <Button
                    onPress={() => setExamDirection("ltr")}
                    className={`${
                      examDirection == "ltr" && "stronke-red-200 bg-gray-300"
                    }`}
                    variant="flat"
                    isIconOnly
                  >
                    <AlignLeft
                      className={`${
                        examDirection == "ltr"
                          ? "stroke-black"
                          : "stroke-slate-400 opacity-75"
                      }`}
                    />
                  </Button>
                  <Button
                    onPress={() => setExamDirection("rtl")}
                    className={`${examDirection == "rtl" && "bg-gray-300 "}`}
                    variant="flat"
                    isIconOnly
                  >
                    <AlignRight
                      className={`${
                        examDirection == "rtl"
                          ? "stroke-black"
                          : "stroke-slate-400 opacity-75"
                      }`}
                    />
                  </Button>
                </div>
                <Divider />
              </section>
            </div>
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
}

export default Sidebar;
