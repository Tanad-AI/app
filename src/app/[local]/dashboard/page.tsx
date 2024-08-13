/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
  Spacer,
  Popover,
  Tooltip,
} from "@nextui-org/react";
import {
  ArrowUpDown,
  ChevronDown,
  FileIcon,
  PlusSquare,
  Search,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { Paragraph, SubHeader, Text } from "../lib/TextComponents";
import Link from "next/link";

function page() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Date Created"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );
  return (
    <div className="w-full">
      <section className="flex items-center justify-between border-[1px] border-b-slate-300 bg-white px-6 py-3">
        <div>
          <Input
            className="w-96"
            size="md"
            radius="sm"
            labelPlacement="outside"
            variant="bordered"
            startContent={<Search size={20} color="gray" />}
            placeholder="Search for your documents here"
          />
        </div>
        <div>
          <Avatar size="sm" />
        </div>
      </section>
      <section className="flex items-center justify-between border-[1px] border-b-slate-300 bg-white px-6 py-3 shadow-sm">
        <SubHeader>Hello user</SubHeader>
        <Link href={`create`}>
          <Button
            radius="sm"
            color="primary"
            startContent={<PlusSquare size={16} />}
          >
            Create New
          </Button>
        </Link>
      </section>
      <section className="space-y-3 px-6 py-3">
        <div className="flex justify-between">
          <Text>My Documents</Text>
          <div className="flex items-center">
            <Tooltip size="sm" content="Reverse Order">
              <ArrowUpDown className="cursor-pointer" color="gray" size={16} />
            </Tooltip>
            <Spacer x={2} />
            <div className="flex cursor-pointer items-center">
              <Spacer x={1} />
              <Dropdown>
                <DropdownTrigger>
                  <div className="flex items-center gap-1">
                    <Paragraph>Sort by </Paragraph>
                    <Text className="font-semibold"> {selectedValue}</Text>
                    <ChevronDown size={16} />
                  </div>
                </DropdownTrigger>
                <DropdownMenu
                  selectionMode="single"
                  selectedKeys={selectedKeys}
                  onSelectionChange={(keys) =>
                    setSelectedKeys(keys as Set<string>)
                  }
                  aria-label="Static Actions"
                >
                  <DropdownItem key="Date Created">Date Created</DropdownItem>
                  <DropdownItem key="Date Edited">Date Edited</DropdownItem>
                  <DropdownItem key="Title">Title</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="cursor-pointer">
            <div className="flex h-[59.4mm] w-[42mm] flex-col items-center justify-center rounded-md border-[1px] border-slate-400 bg-slate-100 transition-colors hover:bg-slate-200">
              <FileIcon size={24} className="stroke-slate-400" />
            </div>
            <Text>Untitled document</Text>
            <Paragraph>Edited 3 months ago</Paragraph>
          </div>
          <div className="cursor-pointer">
            <div className="flex h-[59.4mm] w-[42mm] flex-col items-center justify-center rounded-md border-[1px] border-slate-400 bg-slate-100 transition-colors hover:bg-slate-200">
              <FileIcon size={24} className="stroke-slate-400" />
            </div>
            <Text>Untitled document</Text>
            <Paragraph>Edited 3 months ago</Paragraph>
          </div>
          <div className="cursor-pointer">
            <div className="flex h-[59.4mm] w-[42mm] flex-col items-center justify-center rounded-md border-[1px] border-slate-400 bg-slate-100 transition-colors hover:bg-slate-200">
              <FileIcon size={24} className="stroke-slate-400" />
            </div>
            <Text>Untitled document</Text>
            <Paragraph>Edited 3 months ago</Paragraph>
          </div>
          <div className="cursor-pointer">
            <div className="flex h-[59.4mm] w-[42mm] flex-col items-center justify-center rounded-md border-[1px] border-slate-400 bg-slate-100 transition-colors hover:bg-slate-200">
              <FileIcon size={24} className="stroke-slate-400" />
            </div>
            <Text>Untitled document</Text>
            <Paragraph>Edited 3 months ago</Paragraph>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
