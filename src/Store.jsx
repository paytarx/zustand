import { create } from "zustand";

// Başlangıç durumu
const initialState = {
  count: 0,
  name : "",
};

// Zustand'ı tanımla
export const useStore = create((set) => ({
  theme: "light",
  name: '',
  email: '',
  colors : [],
  // State
  ...initialState,
  // Actions
  addColor : (color) => set((state) => ({colors: [...state.colors, color]})),
  removeColor : (color) => set((state) => ({colors: state.colors.filter((e) => e !== color)})),
  toggleTheme: () => set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  setName : (name) => set({name}),
  setEmail : (email) => set({email}),
  resetForm: () => set({name: '', email: ''}),
  up: () => set((state) => ({ count: state.count + 1 })),
  down: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(initialState),

}));
