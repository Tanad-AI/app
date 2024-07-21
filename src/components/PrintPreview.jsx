"use client";
import React, { useLayoutEffect } from "react";
import { Previewer } from "pagedjs";

const PrintPreview = () => {
  useLayoutEffect(() => {
    const previewer = new Previewer();
    previewer.preview(
      document.querySelector("#pagedjsdocroot")?.innerHTML,
      ["../app/globals.css"],
      document.querySelector("#preview"),
    );
  }, []);
  return <div></div>;
};

export default PrintPreview;
