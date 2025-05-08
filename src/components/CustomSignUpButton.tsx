import { useAuth } from "@/app/[local]/context/AuthContext";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import SignOutLink from "./SignOutLink";
import { LogOut } from "lucide-react";
import Link from "next/link";

function CustomSignUpButton({ theme }: { theme?: "dark" | "light" }) {
  const t = useTranslations("NavBar");
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <Dropdown>
            <DropdownTrigger>
              <Avatar src={user.photoURL || ""} />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="Sign Out">
                <div className="flex items-center gap-1">
                  <LogOut size={12} />
                  <SignOutLink>Log Out</SignOutLink>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </>
      ) : (
        <>
          <Button
            className={` ${
              theme == "dark"
                ? " border-3 border-black/15 bg-primary-900 text-white "
                : "border-[1px] border-black/15 bg-white text-black"
            }`}
            radius="sm"
          >
            <Link href={"../sign-in"}>{t("signUp")}</Link>
          </Button>
        </>
      )}
    </>
  );
}

export default CustomSignUpButton;
