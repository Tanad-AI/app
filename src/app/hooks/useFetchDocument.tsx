import { useState } from "react";
import { useRouter } from "next/navigation";
import { Field } from "../[local]/types/report.typs";

type ApiRoute = "create-document" | "delete-document";
type RedirectUrl = "create" | "delete";

export function useFetchDocument(apiRoute: string, redirectUrl: RedirectUrl) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();

  const fetchDocument = async (fields: Field[], documentId: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/${apiRoute}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields, documentId }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch document");
      }
      redirectUrl == "create" ? router.push(`../create/${documentId}`) : null;
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchDocument, loading, error };
}
