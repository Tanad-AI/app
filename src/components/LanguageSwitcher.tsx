"use client";
import { Select, SelectItem, Spinner } from "@nextui-org/react";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";
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
  const pathName = usePathname();
  if (!path) path = pathName;
  path = path.slice(4, path.length);
  const [value, setValue] = useState<string>("en");
  const t = useTranslations("Create");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = pathName.slice(1, 3);
  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    startTransition(() => {
      router.replace(`/${e.target.value}/${path}`, { scroll: false });
    });
  };
  console.log(path);
  if (isPending)
    return (
      <div className="flex h-8 w-36 items-center gap-1 rounded-lg  px-3">
        <Spinner size="sm" />
        {t("switching")}
      </div>
    );

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
