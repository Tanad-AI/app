"use client";

import useReportStore from "@/app/[local]/store/reportStore";
import { useFetchDocument } from "@/app/hooks/useFetchDocument";
import { Button } from "@nextui-org/react";
import { createId } from "@paralleldrive/cuid2";
import React from "react";

function CreateNewButton() {
  const fields = useReportStore((state) => state.fields);
  const documentId = createId();

  const { fetchDocument, loading, error } = useFetchDocument(
    "create-document",
    "create",
  );

  if (error) {
    alert(error);
  }

  return (
    <Button
      color="primary"
      isLoading={loading}
      onClick={() => fetchDocument(fields, documentId)}
    >
      Create New Report
    </Button>
  );
}

export default CreateNewButton;
