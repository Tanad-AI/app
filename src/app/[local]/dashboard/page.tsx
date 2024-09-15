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
import { Paragraph, Text } from "../lib/TextComponents";
import Link from "next/link";
import { useTranslations } from "next-intl";

function page() {
  const t = useTranslations("dashboard");
  const [selectedKeys, setSelectedKeys] = useState(new Set([t("dateCreated")]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );
  return (
    <div className="w-full">
      <section className="sticky top-0 z-30 flex items-center justify-between space-x-4 border-b-[1px]  border-b-slate-300 bg-white px-6 py-3 ">
        <Input
          className="md:w-96"
          size="md"
          radius="sm"
          labelPlacement="outside"
          variant="bordered"
          startContent={<Search size={20} color="gray" />}
          placeholder={t("searchPlaceholder")}
        />
        <Link href={`create`}>
          <Button
            radius="sm"
            color="primary"
            startContent={<PlusSquare size={16} />}
          >
            {t("createNew")}
          </Button>
        </Link>
      </section>
      <section className="space-y-6 px-6 py-3">
        <div className="flex justify-between">
          <Text>{t("myDocuments")}</Text>
          <div className="flex items-center">
            <Tooltip size="sm" content={t("reverseOrder")}>
              <ArrowUpDown className="cursor-pointer" color="gray" size={16} />
            </Tooltip>
            <Spacer x={2} />
            <div className="flex cursor-pointer items-center">
              <Spacer x={1} />
              <Dropdown>
                <DropdownTrigger>
                  <div className="flex items-center gap-1">
                    <Paragraph>{t("sortBy")} </Paragraph>
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
                  <DropdownItem key={t("dateCreated")}>
                    {t("dateCreated")}
                  </DropdownItem>
                  <DropdownItem key={t("dateEdited")}>
                    {t("dateEdited")}
                  </DropdownItem>
                  <DropdownItem key={t("titleSort")}>
                    {t("titleSort")}
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-8 gap-x-0  md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="cursor-pointer">
              <div className="flex h-[42.42vw] w-[30vw] flex-col items-center justify-center rounded-md border-[1px] border-slate-400 bg-slate-100 transition-colors hover:bg-slate-200 md:h-[21.21vw] md:w-[15vw]">
                <FileIcon size={24} className="stroke-slate-400" />
              </div>
              <Text>Untitled document</Text>
              <Paragraph>{t("editedLabel")}</Paragraph>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
