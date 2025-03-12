import React, { useEffect, useState } from "react";
import { SortableList } from "@/components/SortableList";
import { Text } from "../../lib/TextComponents";
import { Card, Spacer, Tab, Tabs } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import useReportStore from "@/app/[local]/store/reportStore";
import { Eye, EyeOff } from "lucide-react";
import PaddingControls from "@/components/PaddingControls";
import LetterHeadUploader from "@/components/LetterheadUploader";
import TextDirectionControls from "@/components/TextDirectionControls";

interface SidebarType {
  className: string;
}

function Sidebar({ className }: SidebarType) {
  const t = useTranslations("Create");
  const fields = useReportStore((state) => state.fields);
  const setFields = useReportStore((state) => state.setFields);
  const setActiveField = useReportStore((state) => state.setActiveField);
  const activeField = useReportStore((state) => state.activeField);
  const [isFieldHidden, setIsFieldHidden] = useState(false);
  const [selected, setSelected] = useState("content");
  useEffect(() => {
    setActiveField(fields[0]);
  }, []);
  return (
    <div
      className={`min-w-[260px] flex-col space-y-2 overflow-y-auto  pb-20  md:block lg:w-[28%]  ${className}`}
    >
      <Text>{t("control")}</Text>
      <Card radius="sm" className=" px-3 py-2 shadow-sm">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key.toString())}
          classNames={{
            tabList: "w-full p-0 text-sm",
            panel: "flex flex-col gap-3",
          }}
          color="primary"
          radius="full"
        >
          <Tab key="content" title="Content">
            <h4>Page Content</h4>
            <SortableList
              items={fields}
              onChange={setFields} // Directly passing the setFields function
              renderItem={(item) => (
                <SortableList.Item
                  className={` cursor-default ${
                    activeField.id == item.id
                      ? "bg-green-500/10 text-primary"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveField(item)}
                  id={item.id}
                >
                  <div className="flex w-full items-center justify-between ">
                    <div className="flex items-center">
                      <SortableList.DragHandle />
                      <span className="cursor-pointer">{item.title}</span>
                    </div>
                    {isFieldHidden ? (
                      <EyeOff
                        onClick={() => setIsFieldHidden(!isFieldHidden)}
                        className="cursor-pointer"
                        size={14}
                        strokeWidth={1.5}
                      />
                    ) : (
                      <Eye
                        onClick={() => setIsFieldHidden(!isFieldHidden)}
                        className="cursor-pointer"
                        size={14}
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                </SortableList.Item>
              )}
            />
          </Tab>
          <Tab key="customize" title="Customize">
            <TextDirectionControls />
            <LetterHeadUploader />
            <PaddingControls />
          </Tab>
        </Tabs>
        <Spacer y={3} />
      </Card>
    </div>
  );
}

export default Sidebar;
