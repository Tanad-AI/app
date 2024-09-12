"useClient";

import { TinyText } from "@/app/[local]/lib/TextComponents";
import {
  Avatar,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { LogOut } from "lucide-react";

function UserAvatar() {
  const t = useTranslations("Create");
  const pathName = usePathname();

  return (
    <Popover placement="right">
      <PopoverTrigger>
        <Avatar size="sm" className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="space-y-2 p-2">
        <div className="space-y-1">
          <TinyText className="font-normal">{t("switchLanguage")}</TinyText>
          <LanguageSwitcher path={pathName} />
        </div>
        <Divider />
        <div className="flex w-full cursor-pointer items-center  justify-start gap-1  rounded-md p-1 font-normal transition-transform-colors-opacity hover:bg-slate-200">
          <LogOut size={12} color="grey" />
          <TinyText>{t("signOut")}</TinyText>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default UserAvatar;
