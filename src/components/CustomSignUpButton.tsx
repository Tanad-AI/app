import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

function CustomSignUpButton({ theme }: { theme?: "dark" | "light" }) {
  const t = useTranslations("NavBar");
  return (
    <>
      <SignedOut>
        <SignInButton>
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
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}

export default CustomSignUpButton;
