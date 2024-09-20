"use client";

import React, { useMemo, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Paragraph, Text } from "@/app/[local]/lib/TextComponents";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export function SortDropDown({}) {
  const t = useTranslations("dashboard");
  const [selectedKeys, setSelectedKeys] = useState(new Set([t("dateCreated")]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <div>
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
          onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
          aria-label="Static Actions"
        >
          <DropdownItem key={t("dateCreated")}>{t("dateCreated")}</DropdownItem>
          <DropdownItem key={t("dateEdited")}>{t("dateEdited")}</DropdownItem>
          <DropdownItem key={t("titleSort")}>{t("titleSort")}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
