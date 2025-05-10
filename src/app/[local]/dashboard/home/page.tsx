import React from "react";
import { Input, Spacer, Tooltip } from "@nextui-org/react";
import { ArrowUpDown, Search } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Text } from "../../lib/TextComponents";
import { SortDropDown } from "@/components/SortDropDown";
import CreateNewButton from "../../../../components/CreateNewButton";
import Documents from "./components/Documents";

async function page() {
  const t = await getTranslations("dashboard");

  return (
    <div className="w-full">
      <section className="sticky top-0 z-30 flex  items-center justify-between  gap-2 border-b-[1px] border-b-slate-300 bg-white px-6  py-3 md:flex-row md:gap-4 ">
        <Input
          className="md:w-96"
          size="md"
          radius="sm"
          labelPlacement="outside"
          variant="bordered"
          startContent={<Search size={20} color="gray" />}
          placeholder={t("searchPlaceholder")}
        />
        <CreateNewButton />
      </section>
      <section className="space-y-6 px-6 py-3">
        <div className="flex justify-between">
          <Text>{t("myDocuments")}</Text>
          <div className="flex items-center">
            <Spacer x={2} />
            <div className="flex cursor-pointer items-center">
              <Spacer x={1} />
              <SortDropDown />
            </div>
          </div>
        </div>
        <Documents />
      </section>
    </div>
  );
}

export default page;
