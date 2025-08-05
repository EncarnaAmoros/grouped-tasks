import { GroupedTask } from "~/modules/Tasks/types/tasks";

export const getTasksProgress = (groupedTasks: GroupedTask[]) => {
  const allTasks = groupedTasks.map((group) => group.tasks).flat();

  const totalTasksValue = allTasks.reduce((sum, task) => sum + task.value, 0);

  if (allTasks.length === 0 || totalTasksValue === 0) {
    return 0;
  }

  // For each completed task: Nt = Vt * 100 / ∑(Vt)
  const completedTasksProgress = allTasks
    .filter((task) => task.checked)
    .reduce((progress, task) => {
      const normalizedValue = (task.value * 100) / totalTasksValue;
      return progress + normalizedValue;
    }, 0);

  const progressWithTwoDecimals = Number(completedTasksProgress.toFixed(2));

  return progressWithTwoDecimals % 1 === 0
    ? Math.round(progressWithTwoDecimals)
    : progressWithTwoDecimals;
};
