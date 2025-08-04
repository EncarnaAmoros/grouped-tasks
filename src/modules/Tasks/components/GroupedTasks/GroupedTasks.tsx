import { ProgressBar } from "~/components";
import GroupTask from "./GroupTask/GroupTask";
import useTasksStore from "~/modules/Tasks/store/useTasksStore";

import styles from "./GroupedTasks.module.scss";

interface GroupedTasksProps {
  title: string;
}

const GroupedTasks = ({ title }: GroupedTasksProps) => {
  const { groupedTasks } = useTasksStore();

  return (
    <div className={styles.groupedTasks}>
      <div className={styles.groupedTasks__header}>
        <h1 className={styles.groupedTasks__title}>{title}</h1>
        <ProgressBar progress={60} />
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
