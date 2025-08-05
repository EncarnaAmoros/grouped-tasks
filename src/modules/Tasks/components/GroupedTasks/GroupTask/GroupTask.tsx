import { ReactElement } from "react";
import { useIntl } from "react-intl";
import { TaskIcon, ChevronDown, ChevronUp } from "~/assets/icons";
import { Task } from "~/modules/Tasks/types/tasks";
import useGroupTask from "./useGroupTask";
import TasksList from "../TasksList/TasksList";
import classNames from "classnames";

import styles from "./GroupTask.module.scss";

interface GroupTaskProps {
  name: string;
  icon?: ReactElement;
  tasks: Task[];
  isLast?: boolean;
}

const GroupTask = ({ name, icon, tasks, isLast }: GroupTaskProps) => {
  const intl = useIntl();

  const { isGroupCompleted, isExpanded, onCheckTask, setIsExpanded } =
    useGroupTask(name);

  return (
    <div className={styles.groupTask}>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={classNames(styles.groupTask__group, {
          [styles["groupTask__group--last"]]: isLast,
          [styles["groupTask__group--expanded"]]: isExpanded,
          [styles["groupTask__group--completed"]]: isGroupCompleted,
        })}
      >
        <div className={styles.groupTask__title}>
          {icon || <TaskIcon className={styles.groupTask__titleIcon} />}
          <span className={styles.groupTask__titleText}>{name}</span>
        </div>

        <div className={styles.groupTask__action}>
          <span className={styles.groupTask__actionText}>
            {intl.formatMessage({ id: isExpanded ? "hide" : "show" })}
          </span>
          {isExpanded ? <ChevronDown /> : <ChevronUp />}
        </div>
      </div>

      {isExpanded && <TasksList tasks={tasks} onCheckTask={onCheckTask} />}
    </div>
  );
};

export default GroupTask;
