import create from "zustand";

type SortKey = "name" | "createdAt" | "updatedAt";
type SortOrder = "asc" | "desc";

interface DashboradState {
  isSidebarOpen: boolean;
  setIsSidebarOpen: () => void;
  sortKey: SortKey;
  sortOrder: SortOrder;
  setSortKey: (key: SortKey) => void;
  toggleSortOrder: () => void;
}

export const useDashboardState = create<DashboradState>((set) => ({
  isSidebarOpen: false,
  setIsSidebarOpen: () => {
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    }));
  },
  sortKey: "createdAt",
  setSortKey: (key) => set({ sortKey: key }),
  sortOrder: "asc",
  toggleSortOrder: () =>
    set((state) => ({ sortOrder: state.sortOrder === "asc" ? "desc" : "asc" })),
}));
