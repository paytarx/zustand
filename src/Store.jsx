import { create } from "zustand";

// Başlangıç durumu
const initialState = {
  count: 0,
};

// Zustand'ı tanımla
export const useStore = create((set) => ({
  // State
  ...initialState,
  // Actions
  up: () => set((state) => ({ count: state.count + 1 })),
  down: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(initialState),
}));
