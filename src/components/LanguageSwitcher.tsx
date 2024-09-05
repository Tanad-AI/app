"use client";
import { Select, Selection, SelectItem } from "@nextui-org/react";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState, useTransition } from "react";

const langueges = [
  {
    name: "English",
    key: "en",
  },
  {
    name: "Arabic",
    key: "ar",
  },
];

function LanguageSwitcher() {
  const [value, setValue] = useState<string>("en");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    startTransition(() => {
      router.replace(`/${e.target.value}`);
    });
  };
  return (
    <Select
      labelPlacement="outside"
      className="min-w-36"
      variant="bordered"
      defaultSelectedKeys={[value]}
      onChange={handleSelectionChange}
      selectorIcon={<Globe size={12} color="grey" />}
    >
      {langueges.map((language) => (
        <SelectItem key={language.key}>{language.name}</SelectItem>
      ))}
    </Select>
  );
}

export default LanguageSwitcher;
