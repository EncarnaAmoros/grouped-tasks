import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import useTasksStore from "~/modules/Tasks/store/useTasksStore";
import { getTasksProgress } from "~/modules/Tasks/helpers/getTasksProgress";
import { ProgressBar } from "~/components";
import GroupTask from "./GroupTask/GroupTask";

import styles from "./GroupedTasks.module.scss";

interface GroupedTasksProps {
  title: string;
}

const GroupedTasks = ({ title }: GroupedTasksProps) => {
  const { groupedTasks, progress, setProgress } = useTasksStore(
    useShallow((state) => ({
      groupedTasks: state.groupedTasks,
      progress: state.progress,
      setProgress: state.setProgress,
    }))
  );

  useEffect(() => {
    setProgress(getTasksProgress(groupedTasks));
  }, [groupedTasks, setProgress]);

  return (
    <div className={styles.groupedTasks}>
      <div className={styles.groupedTasks__header}>
        <h1 className={styles.groupedTasks__title}>{title}</h1>
        <ProgressBar progress={progress} />
      </div>

      <div className={styles.groupedTasks__content}>
        {groupedTasks.map((groupedTask, index) => (
          <GroupTask
            key={groupedTask.name}
            name={groupedTask.name}
            tasks={groupedTask.tasks}
            isLast={index === groupedTasks.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupedTasks;
