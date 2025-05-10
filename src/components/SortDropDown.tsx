"use client";

import React, { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
  Button,
} from "@nextui-org/react";
import { Paragraph, Text } from "@/app/[local]/lib/TextComponents";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useDashboardState } from "@/app/[local]/store/DashboardStore";

// Define the SortKey type
type SortKey = "createdAt" | "updatedAt" | "name";

export function SortDropDown({}) {
  const t = useTranslations("dashboard");
  const { sortKey, setSortKey, toggleSortOrder } = useDashboardState();

  const selectedValue =
    sortKey == "createdAt"
      ? t("dateCreated")
      : sortKey == "updatedAt"
        ? t("dateEdited")
        : t("titleSort");

  return (
    <div className="flex items-center">
      <Button isIconOnly variant="light" size="sm" onClick={toggleSortOrder}>
        <Tooltip size="sm" content={t("reverseOrder")}>
          <ArrowUpDown className="cursor-pointer" color="gray" size={16} />
        </Tooltip>
      </Button>
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
          selectedKeys={sortKey}
          onSelectionChange={(keys) => {
            const selectedKey = Array.from(keys)[0] as string;
            setSortKey(selectedKey as SortKey);
            console.log(selectedKey);
          }}
          aria-label="Static Actions"
        >
          <DropdownItem key={"createdAt"}>{t("dateCreated")}</DropdownItem>
          <DropdownItem key={"updatedAt"}>{t("dateEdited")}</DropdownItem>
          <DropdownItem key={"name"}>{t("titleSort")}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
