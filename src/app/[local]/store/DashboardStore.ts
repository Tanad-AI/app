import create from "zustand";

interface DashboradState {
  isSidebarOpen: boolean;
  setIsSidebarOpen: () => void;
}

export const useDashboardState = create<DashboradState>((set) => ({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    }));
  },
}));
