import useCustomizeStore from "@/app/[local]/store/pageCustomizationStore";
import React from "react";
import { useDropzone } from "react-dropzone";

const LetterHeadUploader = () => {
  const { letterHead, setLetterHead, resetLetterHead } = useCustomizeStore();

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setLetterHead(URL.createObjectURL(acceptedFiles[0])); // Store the first file
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] }, // Accept all image types
    maxFiles: 1, // Limit to one file
  });

  return (
    <div className="mx-auto rounded-lg bg-gray-100 shadow-md">
      <h1 className="mb-4 text-xl font-bold text-gray-800">Image Uploader</h1>

      <div
        {...getRootProps()}
        className={`rounded-md border-2 border-dashed p-4 text-center ${
          isDragActive ? "border-blue-500" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500">Drop the image here...</p>
        ) : (
          <p className="text-gray-500">
            Drag & drop an image here, or click to select one.
          </p>
        )}
      </div>

      {letterHead && (
        <div className="mt-4">
          <p className="font-semibold text-gray-700">Selected letterHead:</p>
          <img
            src={letterHead}
            alt="Uploaded preview"
            className="mt-2 max-h-40 w-full rounded-md object-cover"
          />
          <button
            onClick={resetLetterHead}
            className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
          >
            Remove letterHead
          </button>
        </div>
      )}
    </div>
  );
};

export default LetterHeadUploader;
