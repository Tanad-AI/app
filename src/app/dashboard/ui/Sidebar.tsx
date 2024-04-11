"use client";

import React from "react";
import { Button, Card, Spacer, Tab, Tabs } from "@nextui-org/react";
import { SectionHeader, SubHeader } from "@/app/lib/TextComponents";
import {
  ClipboardEditIcon,
  ClipboardList,
  FileDown,
  FileEditIcon,
  PencilRuler,
} from "lucide-react";

function sidebar() {
  return (
    <>
      <Card className="h-fit w-1/3 p-2 shadow-md">
        <Tabs
          classNames={{
            tabList: "w-full shadow-md ",
          }}
        >
          <Tab
            key="content"
            className="flex flex-col items-start "
            title={
              <div className="flex items-center space-x-2">
                <ClipboardEditIcon size={16} />
                <div>content</div>
              </div>
            }
          >
            <SectionHeader>content</SectionHeader>
            <Spacer y={3} />
            <div className="flex w-full flex-col gap-3">
              <Button size="lg" variant="bordered" className="w-full">
                Header
              </Button>
              <Button size="lg" variant="bordered" className="w-full">
                Questions
              </Button>
              <Button size="lg" variant="bordered" className="w-full">
                Footer
              </Button>
            </div>
          </Tab>
          <Tab
            key="Customize"
            className="flex flex-col items-start "
            title={
              <div className="flex items-center space-x-2">
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
