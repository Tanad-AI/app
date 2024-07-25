"use client";

import React from "react";
import {
  Button,
  Card,
  Select,
  SelectItem,
  Spacer,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { SubHeader, Text } from "@/app/lib/TextComponents";
import { Globe } from "lucide-react";

function sidebar({ activeControlView, setActiveControlView }: any) {
  const controlsButtons = ["header", "questions", "footer"];
  return (
    <div className="min-w-[260px]  flex-col space-y-2 md:flex   lg:w-[28%]">
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
            <Text>Content</Text>
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
          <Tab
            key="Customize"
            className="flex flex-col rounded-none"
            title="Customize"
          >
            <Text>Customize</Text>
            <div className="flex w-full flex-col gap-3">
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
            </div>
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
}

export default sidebar;
