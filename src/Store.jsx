import { create } from "zustand";

// Başlangıç durumu
const initialState = {
  count: 0,
  name : "",
};

// Zustand'ı tanımla
export const useStore = create((set) => ({
  theme: "light",
  toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  name: '',
  email: '',
  setName : (name) => set({name}),
  setEmail : (email) => set({email}),
  resetForm: () => set({name: '', email: ''}),
  // State
  ...initialState,
  // Actions
  up: () => set((state) => ({ count: state.count + 1 })),
  down: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(initialState),

}));
