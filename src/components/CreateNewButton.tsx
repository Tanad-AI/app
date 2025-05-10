"use client";

import { useAuth } from "@/app/[local]/context/AuthContext";
import useReportStore from "@/app/[local]/store/reportStore";
import { useFetchDocument } from "@/app/hooks/useFetchDocument";
import { Button } from "@nextui-org/react";
import { createId } from "@paralleldrive/cuid2";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

function CreateNewButton() {
  const fields = useReportStore((state) => state.fields);
  const documentId = createId();
  const t = useTranslations("dashboard");
  const { user } = useAuth();

  const { fetchDocument, loading, error } = useFetchDocument(
    "create-document",
    "create",
  );

  if (error) {
    alert(error);
  }

  return (
    <>
      {user ? (
        <Button
          color="primary"
          isLoading={loading}
          onClick={() => fetchDocument(fields, documentId, user.uid)}
        >
          {t("createNew")}
        </Button>
      ) : (
        <Link href="../sign-in">
          <Button color="primary" isLoading={loading}>
            {t("createNew")}
          </Button>
        </Link>
      )}
    </>
  );
}

export default CreateNewButton;
