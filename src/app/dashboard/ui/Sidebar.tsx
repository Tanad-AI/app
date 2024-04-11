"use client";

import React from "react";
import { Button, Card, Tab, Tabs } from "@nextui-org/react";
import { SectionHeader, SubHeader } from "@/app/lib/TextComponents";
import {
  ClipboardEditIcon,
  ClipboardList,
  FileDown,
  PencilRuler,
} from "lucide-react";

function sidebar() {
  return (
    <>
      <Card className="h-full w-1/3 p-2">
        <Tabs
          classNames={{
            tabList: "w-full ",
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
            <Button>Header</Button>
            <Button>Questions</Button>
            <Button>Footer</Button>
          </Tab>
          <Tab>customize</Tab>
        </Tabs>
      </Card>
    </>
  );
}

export default sidebar;
