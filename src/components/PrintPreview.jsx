"use client";
import React, { useLayoutEffect } from "react";
import { Previewer } from "pagedjs";

const PrintPreview = ({ setIsDocumentLoaded }) => {
  useLayoutEffect(() => {
    const previewer = new Previewer();
    previewer.preview(
      document.querySelector("#pagedjsdocroot")?.innerHTML,
      ["../app/globals.css"],
      document.querySelector("#preview"),
    );

    previewer.on("rendered", () => {
      setTimeout(() => setIsDocumentLoaded(true), 1);
    });
    setIsDocumentLoaded(false);
  }, []);
  return <div></div>;
};

export default PrintPreview;
