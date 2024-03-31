"use client";
import { Paragraph, Text } from "@/app/lib/TextComponents";
import { TanadLogo } from "@/assets";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Globe } from "lucide-react";

function CreatePageNavbar() {
  return (
    <nav className="w-full flex justify-between items-start">
      <section className="flex gap-2 items-center">
        <TanadLogo className="scale-85" />
        <div className="h-12 w-[1px] bg-slate-400" />
        <div>
          <Text>Tanad AI</Text>
          <Paragraph>AI document generator</Paragraph>
        </div>
      </section>
      <Select
        placeholder="Select an language"
        labelPlacement="outside"
        className="max-w-28"
        selectorIcon={<Globe opacity={0.7} />}
        defaultSelectedKeys={["english"]}
      >
        <SelectItem value="arabic" key={"arabic"}>
          arabic
        </SelectItem>
        <SelectItem value="english" key={"english"}>
          english
        </SelectItem>
      </Select>
    </nav>
  );
}

export default CreatePageNavbar;
