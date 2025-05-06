import { useAuth } from "@/app/[local]/context/AuthContext";
import { Avatar, Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import SignOutLink from "./SignOutLink";

function CustomSignUpButton({ theme }: { theme?: "dark" | "light" }) {
  const t = useTranslations("NavBar");
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <Avatar src={user.photoURL || ""} />
          <SignOutLink />
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
            {t("signUp")}
          </Button>
        </>
      )}
    </>
  );
}

export default CustomSignUpButton;
