import create from "zustand";

interface CreatePageState {
  activeSection: number;
  setActiveSection: (section: number) => void;
}

export const useCreatePageState = create<CreatePageState>((set) => ({
  activeSection: 1,
  setActiveSection: (section) => set({ activeSection: section }),
}));
