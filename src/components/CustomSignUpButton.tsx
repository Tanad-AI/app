import { useAuth } from "@/app/[local]/context/AuthContext";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import SignOutLink from "./SignOutLink";
import { Globe, LogOut } from "lucide-react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { TinyText } from "@/app/[local]/lib/TextComponents";

function ChangeLanguageModal({ locale }: { locale: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const t = useTranslations("dashboard");

  return (
    <>
      <div onClick={onOpen} className="flex !list-none items-center gap-1 ">
        <Globe size={12} />
        {locale == "ar" ? "ُالعربية" : "English"}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("lang")}
              </ModalHeader>
              <ModalBody>
                <TinyText>{t("langHint")}</TinyText>
                <LanguageSwitcher />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {t("close")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

function CustomSignUpButton({ theme }: { theme?: "dark" | "light" }) {
  const t = useTranslations("dashboard");
  const locale = useLocale();
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          <Dropdown>
            <DropdownTrigger>
              <Avatar src={user.photoURL || ""} />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Dropdown menu with description"
              variant="faded"
              closeOnSelect={false}
            >
              <DropdownSection
                className="!list-none"
                showDivider
                title={user.email as string}
              >
                <DropdownItem key="Locale">
                  <ChangeLanguageModal locale={locale} />
                </DropdownItem>
              </DropdownSection>
              <DropdownSection className="!list-none">
                <DropdownItem key="Sign Out">
                  <div className="flex !list-none items-center gap-1 text-red-500">
                    <LogOut size={12} />
                    <SignOutLink>{t("logout")}</SignOutLink>
                  </div>
                </DropdownItem>
              </DropdownSection>
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
            <Link href={"../sign-in"}>{t("login")}</Link>
          </Button>
        </>
      )}
    </>
  );
}

export default CustomSignUpButton;
