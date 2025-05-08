import React, { useEffect, useState } from "react";
import { SortableList } from "@/components/SortableList";
import { Paragraph, SubHeader, Text } from "../../lib/TextComponents";
import { Button, Card, Spacer, Tab, Tabs } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import useReportStore from "@/app/[local]/store/reportStore";
import { Eye, EyeOff, Minus, Plus } from "lucide-react";
import PaddingControls from "@/components/PaddingControls";
import LetterHeadUploader from "@/components/LetterheadUploader";
import TextDirectionControls from "@/components/TextDirectionControls";
import useCustomizeStore from "../../store/pageCustomizationStore";

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
  const {
    MainImgsNumber,
    incrementMainImgsNumber,
    decrementMainImgsNumber,
    resetMainImgsNumber,
  } = useCustomizeStore();
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
            <div className=" rounded-lg border-[1px] border-gray-100 bg-white p-2 shadow-md">
              <SubHeader className="mb-2">Main Images</SubHeader>
              <Paragraph>Number Of Images: {MainImgsNumber}</Paragraph>
              <div className="mt-2 flex gap-5">
                <Button
                  isIconOnly
                  onClick={incrementMainImgsNumber}
                  className={`flex size-12 items-center justify-center  rounded-md bg-secondary  text-black ring-2 ring-secondary-300 `}
                  aria-label="Set LTR"
                >
                  <Plus size={14} />
                </Button>
                <Button
                  isIconOnly
                  onClick={decrementMainImgsNumber}
                  className={`flex size-12 items-center justify-center  rounded-md bg-secondary  text-black ring-2 ring-secondary-300 `}
                  aria-label="Set LTR"
                >
                  <Minus size={14} />
                </Button>
              </div>
            </div>
          </Tab>
        </Tabs>
        <Spacer y={3} />
      </Card>
    </div>
  );
}

export default Sidebar;
