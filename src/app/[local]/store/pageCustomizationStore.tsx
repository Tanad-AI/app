import { create } from "zustand";

export interface StoreState {
  documentName: string;
  setDocumentName: (newName: string) => void;

  yPadding: number;
  xPadding: number;
  setYPadding: (newVal: number) => void;
  setXPadding: (newVal: number) => void;
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
  MainImgsNumber: number;
  setMainImgsNumber: (newVal: number) => void;
  incrementMainImgsNumber: () => void;
  decrementMainImgsNumber: () => void;
  resetMainImgsNumber: () => void;
}

const useCustomizeStore = create<StoreState>((set) => ({
  documentName: "untitled document",
  yPadding: 10,
  xPadding: 10,
  letterHead: null, // Default to no letterhead
  textDirection: "rtl", // Default to "ltr"
  incrementYPadding: () => set((state) => ({ yPadding: state.yPadding + 5 })),
  decrementYPadding: () =>
    set((state) => ({ yPadding: Math.max(0, state.yPadding - 5) })),
  resetYPadding: () => set(() => ({ yPadding: 10 })),
  incrementXPadding: () => set((state) => ({ xPadding: state.xPadding + 5 })),
  decrementXPadding: () =>
    set((state) => ({ xPadding: Math.max(0, state.xPadding - 5) })),
  resetXPadding: () => set(() => ({ xPadding: 10 })),
  setLetterHead: (file) => set(() => ({ letterHead: file })),
  resetLetterHead: () => set(() => ({ letterHead: null })),
  setTextDirection: (direction) => set(() => ({ textDirection: direction })),
  toggleTextDirection: () =>
    set((state) => ({
      textDirection: state.textDirection === "ltr" ? "rtl" : "ltr",
    })),
  MainImgsNumber: 0,
  incrementMainImgsNumber: () =>
    set((state) => ({
      MainImgsNumber: Math.min(36, state.MainImgsNumber + 1),
    })),
  decrementMainImgsNumber: () =>
    set((state) => ({ MainImgsNumber: Math.max(0, state.MainImgsNumber - 1) })),
  resetMainImgsNumber: () => set({ MainImgsNumber: 0 }),
  setDocumentName: (newName: string) => set({ documentName: newName }),
  setYPadding: (newVal) => set({ yPadding: newVal }),
  setXPadding: (newVal) => set({ xPadding: newVal }),
  setMainImgsNumber: (newVal) => set({ MainImgsNumber: newVal }),
}));

export default useCustomizeStore;
