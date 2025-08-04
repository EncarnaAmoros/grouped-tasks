import { ProgressBar } from "~/components";
import { GroupedTask } from "~/modules/Tasks/types/tasks";
import GroupTask from "./GroupTask/GroupTask";

import styles from "./GroupedTasks.module.scss";

interface GroupedTasksProps {
  title: string;
  groupedTasks: GroupedTask[];
}

const GroupedTasks = ({ title, groupedTasks }: GroupedTasksProps) => {
  return (
    <div className={styles.groupedTasks}>
      <div className={styles.groupedTasks__header}>
        <h1 className={styles.groupedTasks__title}>{title}</h1>
        <ProgressBar progress={60} />
      </div>

      <div className={styles.groupedTasks__content}>
        {groupedTasks.map((groupedTask) => (
          <GroupTask key={groupedTask.name} name={groupedTask.name} />
        ))}
      </div>
    </div>
  );
};

export default GroupedTasks;
