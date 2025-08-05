import { create } from "zustand";
import { GroupedTask } from "~/modules/Tasks/types/tasks";

interface TasksStore {
  groupedTasks: GroupedTask[];
  setGroupedTasks: (tasks: GroupedTask[]) => void;
  progress: number;
  setProgress: (progress: number) => void;
}

const useTasksStore = create<TasksStore>((set) => ({
  groupedTasks: [],
  setGroupedTasks: (tasks: GroupedTask[]) => set({ groupedTasks: tasks }),
  progress: 0,
  setProgress: (progress: number) => set({ progress: progress }),
}));

export default useTasksStore;
