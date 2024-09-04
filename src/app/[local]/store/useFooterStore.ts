import create from "zustand";

interface FooterState {
  lines: string[];
  setLines: (lines: string[]) => void;
  handleChange: (index: number, newText: string) => void;
  handleDelete: (fieldIndex: number) => void;
  moveLine: (index: number, direction: "up" | "down") => void;
}

const useFooterStore = create<FooterState>((set) => ({
  lines: [""],
  setLines: (newLines) => set({ lines: newLines }),

  handleChange: (index, newText) =>
    set((state) => {
      const updatedLines = [...state.lines];
      updatedLines[index] = newText;
      return { lines: updatedLines };
    }),

  handleDelete: (fieldIndex) =>
    set((state) => {
      const updatedLines = state.lines.filter((_, i) => i !== fieldIndex);
      return { lines: updatedLines };
    }),

  moveLine: (index, direction) =>
    set((state) => {
      const newIndex = direction === "up" ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= state.lines.length) return state;

      const updatedLines = [...state.lines];
      [updatedLines[index], updatedLines[newIndex]] = [
        updatedLines[newIndex],
        updatedLines[index],
      ];
      return { lines: updatedLines };
    }),
}));

export default useFooterStore;
