/* eslint-disable @next/next/no-img-element */
import { useQuizStore } from "@/app/[local]/store/QuizState";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const DragAndDropImageUpload = () => {
  const setExamLogo = useQuizStore((state) => state.setExamLogo);
  const examLogo = useQuizStore((state) => state.examLogo);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setExamLogo(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"], // Specifies accepted image formats
    },
  });

  return (
    <div
      {...getRootProps()}
      className="cursor-pointer border-2 border-dashed border-gray-400 p-5 text-center"
    >
      <input {...getInputProps()} />
      <p>Drag and drop an image here, or click to select one</p>
      {examLogo && (
        <img
          className="mt-5 max-h-14 max-w-full"
          src={examLogo}
          alt="Preview"
        />
      )}
    </div>
  );
};

export default DragAndDropImageUpload;
