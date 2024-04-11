"use client";

import React from "react";
import { Button, Card, Spacer, Tab, Tabs } from "@nextui-org/react";
import { SectionHeader, SubHeader, Text } from "@/app/lib/TextComponents";
import {
  ClipboardEditIcon,
  ClipboardList,
  FileDown,
  FileEditIcon,
  PencilRuler,
} from "lucide-react";

function sidebar({ activeControl, setActiveControl }: any) {
  const controlsButtons = ["header", "questions", "footer"];
  return (
    <>
      <Card className="h-fit w-1/3 px-4 py-2 shadow-md">
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
            <SectionHeader>content</SectionHeader>
            <Spacer y={3} />
            <div className="flex w-full flex-col gap-3">
              {controlsButtons.map((button) => (
                <Button
                  size="lg"
                  key={button}
                  variant="shadow"
                  className="w-full border-[1px] border-black/10 bg-transparent"
                >
                  <Text>{button}</Text>
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
