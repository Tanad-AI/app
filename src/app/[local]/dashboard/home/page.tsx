import React from "react";
import { Input, Spacer, Tooltip } from "@nextui-org/react";
import { ArrowUpDown, FileIcon, Search } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Paragraph, Text } from "../../lib/TextComponents";
import { SortDropDown } from "@/components/SortDropDown";
import prisma from "../../../db";
import CreateNewButton from "../../../../components/CreateNewButton";
import Link from "next/link";
import { Document } from "@prisma/client";

async function page() {
  const t = await getTranslations("dashboard");
  const documents: Document[] = await prisma.document.findMany();

  return (
    <div className="w-full">
      <section className="sticky top-0 z-30 flex flex-col-reverse items-center justify-between  gap-2 border-b-[1px] border-b-slate-300 bg-white px-6  py-3 md:flex-row md:gap-4 ">
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
            <Tooltip size="sm" content={t("reverseOrder")}>
              <ArrowUpDown className="cursor-pointer" color="gray" size={16} />
            </Tooltip>
            <Spacer x={2} />
            <div className="flex cursor-pointer items-center">
              <Spacer x={1} />
              <SortDropDown />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-8 gap-x-0  md:grid-cols-3 lg:grid-cols-4">
          {documents.map((document) => (
            <Link key={document.id} href={`../create/${document.id}`}>
              <div className="cursor-pointer">
                <div className="flex h-[42.42vw] w-[30vw] flex-col items-center justify-center rounded-md border-[1px] border-slate-400 bg-slate-100 transition-colors hover:bg-slate-200 md:h-[21.21vw] md:w-[15vw]">
                  <FileIcon size={24} className="stroke-slate-400" />
                </div>
                <Text>{document.name}</Text>
                <Paragraph>
                  {t("createdLabel")}{" "}
                  {new Date(document.createdAt).toLocaleDateString()}
                </Paragraph>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
