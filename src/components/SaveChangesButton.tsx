import useReportStore from "@/app/[local]/store/reportStore";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const SaveChangesButton = ({ documentId }: { documentId: string }) => {
  const fields = useReportStore((state) => state.fields);
  const [loading, setLoading] = useState(false);

  async function fetchDocument() {
    setLoading(true);
    try {
      const response = await fetch("/api/update-document", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields, documentId }),
      });
      setLoading(false);
      console.log(response);
      alert("Changes saved successfully!");
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  }
  return (
    <Button isLoading={loading} color="warning" onClick={() => fetchDocument()}>
      Save Changes
    </Button>
  );
};

export default SaveChangesButton;
