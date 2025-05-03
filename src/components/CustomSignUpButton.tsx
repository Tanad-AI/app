import { KindeUser, LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { Avatar, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import React from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { LogOut } from "lucide-react";

function CustomSignUpButton({
  user,
  isUserAuthenticated,
  theme,
}: {
  user: KindeUser<Record<string, any>> | null;
  isUserAuthenticated: boolean | null;
  theme: "light" | "dark";
}) {
  const t = useTranslations("NavBar");

  return (
    <>
      {!isUserAuthenticated ? (
        <Button
          className={` ${
            theme == "dark"
              ? " border-3 border-black/15 bg-primary-900 text-white "
              : "border-[1px] border-black/15 bg-white text-black"
          }`}
          radius="sm"
        >
          <LoginLink postLoginRedirectURL="/dashboard">{t("signUp")}</LoginLink>
        </Button>
      ) : (
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Avatar src={user?.picture || user?.given_name?.slice(0, 1)} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="logOut">
                <div className="flex items-center gap-2">
                  <LogOut size={12} />
                  <LogoutLink>Log out</LogoutLink>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
    </>
  );
}

export default CustomSignUpButton;
