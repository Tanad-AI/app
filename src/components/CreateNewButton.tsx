"use client";
import { Button } from "@nextui-org/react";
import { PlusSquare } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

function CreateNewButton() {
  const t = useTranslations("dashboard");
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const locale = pathname.slice(1, 3);
  const router = useRouter();
  const [error, setError] = useState("");

  function handleClick() {
    startTransition(async () => {
      try {
        const response = await fetch("/api/create-set", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          setError("Failed to create a new set");
        }
        const data = await response.json();
        router.push(`/${locale}/create/${data.newSetId}`, { scroll: false });
      } catch (error) {
        console.log(error);
      }
      router.refresh();
    });
  }

  return (
    <Button
      isLoading={isPending}
      isDisabled={isPending}
      type="submit"
      radius="sm"
      color="primary"
      className="me-0 min-w-full md:min-w-fit"
      onClick={handleClick}
      startContent={
        <PlusSquare className={`${isPending ? "hidden" : "block"}`} size={16} />
      }
    >
      {t("createNew")}
      {error && error}
    </Button>
  );
}

export default CreateNewButton;
