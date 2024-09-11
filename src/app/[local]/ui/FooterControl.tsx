import React, { useEffect, useRef } from "react";
import { Text } from "../lib/TextComponents";
import { Button, Card, Input, Tooltip } from "@nextui-org/react";
import { ArrowDown, ArrowUp, PlusIcon, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import autoAnimate from "@formkit/auto-animate";
import useFooterStore from "../store/useFooterStore";
import { createId } from "@paralleldrive/cuid2";

function FooterControl() {
  const lines = useFooterStore((state) => state.lines);
  const setLines = useFooterStore((state) => state.setLines);
  const handleChange = useFooterStore((state) => state.handleChange);
  const handleDelete = useFooterStore((state) => state.handleDelete);
  const moveLine = useFooterStore((state) => state.moveLine);
  const t = useTranslations("footer");
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <div className="h-full">
      <Text className="mb-2">{t("footer")}</Text>
      <Card
        radius="sm"
        shadow="none"
        className="flex min-h-full flex-col gap-3 px-3 pb-28 pt-4"
      >
        <div ref={parent} className="flex flex-col gap-5">
          {lines.map((line, i) => (
            <div key={line.id} className="flex">
              <Input
                value={line.text}
                onChange={(e) => handleChange(i, e.target.value)}
                placeholder={t("typeAnyThing")}
                label={`${t("line")} ${i + 1}`}
                labelPlacement="outside"
                variant="bordered"
                title="Footer"
                endContent={
                  <Tooltip content={t("removeField")} size="sm" delay={400}>
                    <div
                      className="cursor-pointer"
                      onClick={() => handleDelete(i)}
                    >
                      <Trash2 size={14} color="gray" />
                    </div>
                  </Tooltip>
                }
              />
              <div className="flex w-fit flex-col">
                <Button
                  isDisabled={i === 0}
                  isIconOnly
                  size="sm"
                  variant="light"
                  className="cursor-pointer"
                  onClick={() => moveLine(i, "up")}
                >
                  <ArrowUp size={16} color="gray" />
                </Button>
                <Button
                  isDisabled={i === lines.length - 1}
                  isIconOnly
                  size="sm"
                  variant="light"
                  className="cursor-pointer"
                  onClick={() => moveLine(i, "down")}
                >
                  <ArrowDown size={16} color="gray" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="faded"
          color="primary"
          onClick={() => setLines([...lines, { text: "", id: createId() }])}
          size="sm"
          className="mx-auto min-h-8 w-fit rounded-full border-[2px] border-purple-700/10 bg-green-300/15 text-xs font-medium"
        >
          <PlusIcon size={12} />
          {t("addNewLine")}
        </Button>
      </Card>
    </div>
  );
}

export default FooterControl;
