import React from "react";
import { SortableList } from "@/components/SortableList";
import { Text } from "../../lib/TextComponents";
import { Card, Spacer } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import useReportStore from "@/app/[local]/store/reportStore";

interface SidebarType {
  activeControlView: number;
  setActiveControlView: (view: number) => void;
  className: string;
}

function Sidebar({
  activeControlView,
  setActiveControlView,
  className,
}: SidebarType) {
  const t = useTranslations("Create");
  const fields = useReportStore((state) => state.fields);
  const setFields = useReportStore((state) => state.setFields);
  const setActiveField = useReportStore((state) => state.setActiveField);
  const activeField = useReportStore((state) => state.activeField);

  return (
    <div
      className={`h-svh min-w-[260px] flex-col space-y-2 overflow-y-scroll  pb-2  md:block lg:w-[28%] xl:h-[800px] ${className}`}
    >
      <Text>{t("control")}</Text>
      <Card radius="sm" className="h-full px-3 py-2  shadow-sm">
        <Spacer y={3} />
        <SortableList
          items={fields}
          onChange={setFields} // Directly passing the setFields function
          renderItem={(item) => (
            <SortableList.Item
              className={`${
                activeField.id == item.id
                  ? "bg-green-500/10 text-primary"
                  : "bg-white"
              }`}
              onClick={() => setActiveField(item)}
              id={item.id}
            >
              {item.title}
              <SortableList.DragHandle />
            </SortableList.Item>
          )}
        />
      </Card>
    </div>
  );
}

export default Sidebar;
