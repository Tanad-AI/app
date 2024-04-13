"use client";

import React from "react";
import { Button, Card, Spacer, Tab, Tabs } from "@nextui-org/react";
import { SubHeader } from "@/app/lib/TextComponents";
import { ClipboardEditIcon, FileEditIcon } from "lucide-react";

function sidebar({ activeControl, setActiveControl }: any) {
  const controlsButtons = ["header", "questions", "footer"];
  return (
    <>
      <Card className="h-fit w-[28%] px-6 py-3 shadow-md">
        <Tabs
          color="primary"
          classNames={{
            tabList: "w-full  shadow-lg p-0",
          }}
        >
          <Tab
            key="content"
            className="flex flex-col items-start "
            title={
              <div className="flex items-center justify-center space-x-2">
                <ClipboardEditIcon size={16} />
                <div>Content</div>
              </div>
            }
          >
            <SubHeader>content</SubHeader>
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
            className="flex flex-col items-start "
            title={
              <div className="flex w-full  items-center justify-center space-x-2">
                <FileEditIcon size={16} />
                <div>Customize</div>
              </div>
            }
          >
            customize
          </Tab>
        </Tabs>
      </Card>
    </>
  );
}

export default sidebar;
