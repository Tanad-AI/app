"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
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

type LanguageSwitcherType = {
  path?: string;
};

function LanguageSwitcher({ path }: LanguageSwitcherType) {
  if (!path) path = "";
  const [value, setValue] = useState<string>("en");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathName = usePathname();
  const locale = pathName.slice(1, 3);
  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    startTransition(() => {
      router.replace(`/${e.target.value}/${path}`, { scroll: false });
    });
  };
  return (
    <Select
      labelPlacement="outside"
      className="w-36"
      variant="bordered"
      defaultSelectedKeys={[locale]}
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
