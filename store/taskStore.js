import create from "zustand";

const useTaskStore = create((set) => ({
  totalTasks: 0,
  completedTasks: 0,
  completeTask: () =>
    set((state) => ({ completedTasks: state.completedTasks + 1 })),
}));

export default useTaskStore;
