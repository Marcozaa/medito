import create from "zustand";

const useAuthStore = create((set) => ({
  authorized: false,
  setIsAuthorized: () => set((state) => ({ authorized: true })),
  removeAuth: () => set((state) => ({ authorized: false })),
}));

export default useAuthStore;
