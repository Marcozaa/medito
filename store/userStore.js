import create from "zustand";

const useUserStore = create((set) => ({
  email: "",
  setEmail: (email) => set((state) => ({ email: email })),
}));

export default useUserStore;
