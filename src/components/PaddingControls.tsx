import useCustomizeStore from "@/app/[local]/store/pageCustomizationStore";
import React from "react";

const PaddingControls = () => {
  const {
    yPadding,
    xPadding,
    incrementYPadding,
    decrementYPadding,
    resetYPadding,
    incrementXPadding,
    decrementXPadding,
    resetXPadding,
  } = useCustomizeStore();

  return (
    <div className=" rounded-lg bg-gray-100  shadow-md">
      <h1 className="mb-4 text-xl font-bold text-gray-800">Padding Control</h1>

      {/* Y Padding */}
      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-700">
          Y Padding: {yPadding}px
        </p>
        <div className="mt-2 flex">
          <button
            onClick={incrementYPadding}
            className="size-12 rounded-md bg-blue-500 text-white transition hover:bg-blue-600"
          >
            +
          </button>
          <button
            onClick={decrementYPadding}
            className="size-12 rounded-md bg-red-500 text-white transition hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={resetYPadding}
            className="rounded-md bg-gray-500  text-white transition hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>

      {/* X Padding */}
      <div>
        <p className="text-lg font-semibold text-gray-700">
          X Padding: {xPadding}px
        </p>
        <div className="mt-2 flex">
          <button
            onClick={incrementXPadding}
            className="size-12 rounded-md bg-blue-500 text-white transition hover:bg-blue-600"
          >
            +
          </button>
          <button
            onClick={decrementXPadding}
            className="size-12 rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={resetXPadding}
            className="rounded-md bg-gray-500 px-4 py-2 text-white transition hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaddingControls;
