import { Paragraph, SubHeader } from "@/app/[local]/lib/TextComponents";
import useCustomizeStore from "@/app/[local]/store/pageCustomizationStore";
import { Button } from "@nextui-org/react";
import { UploadCloudIcon } from "lucide-react";
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
    <div className=" rounded-lg border-[1px] border-gray-100 bg-white p-2 shadow-md">
      <SubHeader className="mb-2">Letterhead</SubHeader>
      <Paragraph className="mb-2">Upload Your Letter head</Paragraph>

      {!letterHead ? (
        <div
          {...getRootProps()}
          className="border-peach-200 flex h-48 flex-col items-center justify-center rounded-xl border border-dashed bg-secondary/30 p-4 text-center"
          style={{ borderColor: "#fbd0d0" }}
        >
          <input {...getInputProps()} />
          <UploadCloudIcon size={24} className="mb-2 text-gray-400" />
          <p className="font-medium text-gray-800">drag and drop</p>
          <p className="mb-4 text-gray-500">or</p>
          <p className="cursor-pointer text-black">Browse files</p>
        </div>
      ) : (
        <div className="mt-2">
          <img
            src={letterHead}
            alt="Uploaded letterhead"
            className="w-full rounded-md object-cover"
          />
          <Button
            color="secondary"
            size="sm"
            onClick={resetLetterHead}
            className="mt-2 text-black"
          >
            Remove letterhead
          </Button>
        </div>
      )}
    </div>
  );
};

export default LetterHeadUploader;
