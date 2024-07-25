"use client";
import { Paragraph, Text, TinyText } from "@/app/lib/TextComponents";
import { TanadLogo } from "@/assets";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Globe } from "lucide-react";

function CreatePageNavbar() {
  return (
    <nav className="flex w-full items-center justify-between">
      <section className="flex items-center gap-1">
        <TanadLogo />
        <TinyText>Tanad AI</TinyText>
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
