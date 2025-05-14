"use client";

import { useAuth } from "@/app/[local]/context/AuthContext";
import useCustomizeStore from "@/app/[local]/store/pageCustomizationStore";
import useReportStore from "@/app/[local]/store/reportStore";
import { Button } from "@nextui-org/react";
import { Save } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";

const SaveChangesButton = ({ documentId }: { documentId: string }) => {
  const fields = useReportStore((state) => state.fields);
  const [loading, setLoading] = useState(false);
  const t = useTranslations("Create");
  const { user } = useAuth();
  // Track if there are changes (to control button state)
  const [hasChanges, setHasChanges] = useState(false);

  // Store initial states to compare against
  const initialStateRef = useRef({
    fields: null as string | null,
    documentProperties: null as string | null,
  });
  const { documentName, MainImgsNumber, textDirection, xPadding, yPadding } =
    useCustomizeStore();

  const documentProperties = {
    documentName,
    MainImgsNumber,
    textDirection,
    xPadding,
    yPadding,
  };

  // On first render, store the initial state
  useEffect(() => {
    if (initialStateRef.current.fields === null) {
      initialStateRef.current = {
        fields: JSON.stringify(fields),
        documentProperties: JSON.stringify(documentProperties),
      };
    }
  }, []);
  // Check for changes whenever fields or documentProperties update
  useEffect(() => {
    // Skip comparison on first render
    if (initialStateRef.current.fields === null) return;

    // Compare current state with initial state
    const currentFieldsStr = JSON.stringify(fields);
    const currentDocPropsStr = JSON.stringify(documentProperties);

    const fieldsChanged = currentFieldsStr !== initialStateRef.current.fields;
    const docPropsChanged =
      currentDocPropsStr !== initialStateRef.current.documentProperties;

    // Enable save button if either has changed
    setHasChanges(fieldsChanged || docPropsChanged);
  }, [fields, documentName, MainImgsNumber, textDirection, xPadding, yPadding]);

  async function fetchDocument() {
    if (!user) {
      alert("sign in to save document");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/update-document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields,
          documentId,
          userId: user.uid,
          documentProperties,
        }),
      });
      setLoading(false);
      alert("Changes saved successfully!");
    } catch (error) {
      alert(error);
      setLoading(false);
    }
    initialStateRef.current = {
      fields: JSON.stringify(fields),
      documentProperties: JSON.stringify(documentProperties),
    };
    setHasChanges(false);
  }
  return (
    <Button
      isLoading={loading}
      color="primary"
      isDisabled={!hasChanges}
      className="flex items-center gap-1"
      onClick={() => fetchDocument()}
    >
      {t("saveChanges")}
    </Button>
  );
};

export default SaveChangesButton;
