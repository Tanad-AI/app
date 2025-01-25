import useCustomizeStore from "@/app/[local]/store/pageCustomizationStore";
import React from "react";

const TextDirectionControls = () => {
  const { textDirection, setTextDirection, toggleTextDirection } =
    useCustomizeStore();

  return (
    <div className="mx-auto rounded-lg bg-gray-100  shadow-md">
      <h1 className="mb-4 text-xl font-bold text-gray-800">Text Direction</h1>
      <p className="mb-4 text-gray-700">
        Current Direction:{" "}
        <span className="font-semibold">{textDirection}</span>
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => setTextDirection("ltr")}
          className={`rounded-md  py-2 ${
            textDirection === "ltr"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } hover:bg-blue-600`}
        >
          Set LTR
        </button>
        <button
          onClick={() => setTextDirection("rtl")}
          className={`rounded-md  py-2 ${
            textDirection === "rtl"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } hover:bg-blue-600`}
        >
          Set RTL
        </button>
        <button
          onClick={toggleTextDirection}
          className="rounded-md bg-yellow-500  py-2 text-white hover:bg-yellow-600"
        >
          Toggle
        </button>
      </div>
    </div>
  );
};

export default TextDirectionControls;
