import { create } from "zustand";
import { GroupedTask } from "~/modules/Tasks/types/tasks";

interface TasksStore {
  groupedTasks: GroupedTask[];
  setGroupedTasks: (tasks: GroupedTask[]) => void;
}

const useTasksStore = create<TasksStore>((set) => ({
  groupedTasks: [],
  setGroupedTasks: (tasks: GroupedTask[]) => set({ groupedTasks: tasks }),
}));

export default useTasksStore;
