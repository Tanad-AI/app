import {
  Avatar,
  Button,
  Dropdown,
  DropdownMenu,
  Input,
  Spacer,
} from "@nextui-org/react";
import { ArrowUpDown, ChevronDown, PlusSquare, Search } from "lucide-react";
import React from "react";
import { Paragraph, SubHeader, Text } from "../lib/TextComponents";
import Link from "next/link";

function page() {
  return (
    <div className="w-full">
      <section className="flex items-center justify-between border-[1px] border-b-slate-300 bg-white px-6 py-3">
        <div>
          <Input
            className="w-96"
            size="sm"
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
      <section className="px-6 py-3">
        <div className="flex justify-between">
          <Text>My Documents</Text>
          <div className="flex items-center">
            <ArrowUpDown className="cursor-pointer" color="gray" size={16} />
            <Spacer x={2} />
            <div className="flex cursor-pointer items-center">
              <Paragraph>Sort by </Paragraph>
              <Spacer x={1} />
              <Text className="font-semibold"> Date created</Text>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </div>
  );
}

export default page;
