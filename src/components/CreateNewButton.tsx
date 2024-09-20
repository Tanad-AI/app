"use client";
import { Button } from "@nextui-org/react";
import { PlusSquare } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

function CreateNewButton() {
  const t = useTranslations("dashboard");
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = pathname.slice(1, 3);
  const router = useRouter();

  const createSet = async () => {
    await fetch("/api/create-set", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  function handleClick() {
    startTransition(() => {
      createSet();
      router.push(`/${locale}/create`, { scroll: false });
    });
  }

  return (
    <Button
      isLoading={isPending}
      isDisabled={isPending}
      type="submit"
      radius="sm"
      color="primary"
      onClick={handleClick}
      startContent={
        <PlusSquare className={isPending ? "hidden" : "block"} size={16} />
      }
    >
      {t("createNew")}
    </Button>
  );
}

export default CreateNewButton;
