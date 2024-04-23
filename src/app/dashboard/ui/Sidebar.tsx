"use client";

import React from "react";
import { Button, Card, Spacer, Tab, Tabs } from "@nextui-org/react";
import { SubHeader } from "@/app/lib/TextComponents";

function sidebar({ activeControl, setActiveControl }: any) {
  const controlsButtons = ["header", "questions", "footer"];
  return (
    <>
      <Card
        radius="sm"
        className="hidden h-fit min-w-[260px] px-6 py-3  shadow-sm md:flex lg:w-[28%]"
      >
        <Tabs
          color="primary"
          size="sm"
          radius="sm"
          classNames={{
            tabList: "w-full shadow-lg p-0",
            cursor: "rounded-none p-0",
          }}
        >
          <Tab key="content" className="flex flex-col" title="Content">
            <SubHeader>Content</SubHeader>
            <Spacer y={3} />
            <div className="flex w-full flex-col gap-3">
              {controlsButtons.map((button, i) => (
                <Button
                  size="md"
                  key={button}
                  radius="sm"
                  onClick={() => setActiveControl(i)}
                  variant="shadow"
                  className={`w-full border-[1.5px] border-black/10 bg-transparent capitalize shadow-md ${
                    activeControl === i &&
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
            Customize
          </Tab>
        </Tabs>
      </Card>
    </>
  );
}

export default sidebar;
