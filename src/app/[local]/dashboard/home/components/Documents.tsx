"use client";

import { useAuth } from "@/app/[local]/context/AuthContext";
import { Paragraph, Text } from "@/app/[local]/lib/TextComponents";
import { Document } from "@prisma/client";
import { FileIcon, AlertCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DocumentSkeleton from "./DocumentSkeleton";
import { useDashboardState } from "@/app/[local]/store/DashboardStore";

const Documents = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const t = useTranslations("dashboard");
  const { sortKey, sortOrder, setSortKey, toggleSortOrder } =
    useDashboardState();

  const sortedDocuments = [...documents].sort((a, b) => {
    let result = 0;

    if (sortKey === "name") {
      result = a.name.localeCompare(b.name);
    } else if (sortKey === "createdAt") {
      result =
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else {
      result =
        new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
    }

    return sortOrder === "asc" ? result : -result;
  });

  const fetchDocuments = async () => {
    if (!user) {
      setDocuments([]);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/get-documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.uid }),
      });

      if (!response.ok) {
        throw new Error(`Error fetching documents: ${response.status}`);
      }

      const data = await response.json();
      setDocuments(data.documents || []);
    } catch (error) {
      console.error("Failed to fetch documents:", error);
      setDocuments([]);
      setError(
        error instanceof Error ? error.message : "Failed to load documents",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [user]); // Add user as a dependency so it refetches when user changes

  if (loading) {
    return (
      <div>
        <DocumentSkeleton count={8} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
          <AlertCircle className="text-red-500" size={20} />
        </div>
        <Text className="text-red-500">{error}</Text>
        <button
          onClick={() => {
            setLoading(true);
            setError(null);
            fetchDocuments();
          }}
          className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
        >
          {t("tryAgain") || "Try Again"}
        </button>
      </div>
    );
  }

  return (
    <div>
      {!user ? (
        <div className="py-10 text-center">
          <Text>
            {t("notLoggedIn") || "Please log in to view your documents"}
          </Text>
        </div>
      ) : documents.length === 0 ? (
        <div className="py-10 text-center">
          <Text>{t("noDocuments") || "No documents found"}</Text>
        </div>
      ) : (
        <div className="grid grid-cols-2 justify-items-center gap-8 gap-x-0 md:grid-cols-3 lg:grid-cols-4">
          {sortedDocuments.map((document) => (
            <Link key={document.id} href={`../create/${document.id}`}>
              <div className="cursor-pointer">
                <div className="flex h-[42.42vw] w-[30vw] flex-col items-center justify-center rounded-md border-[1px] border-slate-400 bg-slate-100 transition-colors hover:bg-slate-200 md:h-[21.21vw] md:w-[15vw]">
                  <FileIcon size={24} className="stroke-slate-400" />
                </div>
                <Text>{document.name}</Text>
                <Paragraph>
                  {t("createdLabel")}
                  {new Date(document.createdAt).toLocaleDateString()}
                </Paragraph>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Documents;
