import { create } from "zustand";

export interface StoreState {
  yPadding: number;
  xPadding: number;
  letterHead: string | null; // Updated state for letterhead
  textDirection: "rtl" | "ltr";
  incrementYPadding: () => void;
  decrementYPadding: () => void;
  resetYPadding: () => void;
  incrementXPadding: () => void;
  decrementXPadding: () => void;
  resetXPadding: () => void;
  setLetterHead: (file: string | null) => void; // Set the letterhead file
  resetLetterHead: () => void; // Reset the letterhead file
  setTextDirection: (direction: "rtl" | "ltr") => void;
  toggleTextDirection: () => void;
}

const useCustomizeStore = create<StoreState>((set) => ({
  yPadding: 10,
  xPadding: 10,
  letterHead: null, // Default to no letterhead
  textDirection: "rtl", // Default to "ltr"
  incrementYPadding: () => set((state) => ({ yPadding: state.yPadding + 5 })),
  decrementYPadding: () =>
    set((state) => ({ yPadding: Math.max(0, state.yPadding - 5) })),
  resetYPadding: () => set(() => ({ yPadding: 0 })),
  incrementXPadding: () => set((state) => ({ xPadding: state.xPadding + 5 })),
  decrementXPadding: () =>
    set((state) => ({ xPadding: Math.max(0, state.xPadding - 5) })),
  resetXPadding: () => set(() => ({ xPadding: 0 })),
  setLetterHead: (file) => set(() => ({ letterHead: file })),
  resetLetterHead: () => set(() => ({ letterHead: null })),
  setTextDirection: (direction) => set(() => ({ textDirection: direction })),
  toggleTextDirection: () =>
    set((state) => ({
      textDirection: state.textDirection === "ltr" ? "rtl" : "ltr",
    })),
}));

export default useCustomizeStore;
