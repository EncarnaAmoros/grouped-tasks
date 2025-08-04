import { useState } from "react";
import { useShallow } from "zustand/shallow";
import { Task } from "~/modules/Tasks/types/tasks";
import useTasksStore from "~/modules/Tasks/store/useTasksStore";

const useGroupTask = (groupName: string) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { groupedTasks, setGroupedTasks } = useTasksStore(
    useShallow((state) => ({
      groupedTasks: state.groupedTasks,
      setGroupedTasks: state.setGroupedTasks,
    }))
  );

  const isGroupCompleted = groupedTasks.some(
    (group) =>
      group.name === groupName && group.tasks.every((task) => task.checked)
  );

  const onCheckTask = (checkedTask: Task) => {
    const newGroupedTasks = groupedTasks.map((group) => {
      if (group.name !== groupName) return group;

      const updatedTasks = group.tasks.map((task) =>
        task.description === checkedTask.description
          ? { ...task, checked: !task.checked }
          : task
      );

      return { ...group, tasks: updatedTasks };
    });

    setGroupedTasks(newGroupedTasks);
  };

  return {
    isGroupCompleted,
    isExpanded,
    onCheckTask,
    setIsExpanded,
  };
};

export default useGroupTask;
