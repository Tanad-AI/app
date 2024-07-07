"use client";

import React from "react";
import { Button, Card, Spacer, Tab, Tabs } from "@nextui-org/react";
import { SubHeader, Text } from "@/app/lib/TextComponents";

function sidebar({ activeControlView, setActiveControlView }: any) {
  const controlsButtons = ["header", "questions", "footer"];
  return (
    <div className=" hidden min-w-[260px]  flex-col space-y-2 md:flex   lg:w-[28%]">
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
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
}

export default sidebar;
