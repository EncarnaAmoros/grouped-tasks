import { Task } from "~/modules/Tasks/types/tasks";

import styles from "./TasksList.module.scss";

interface TasksListProps {
  tasks: Task[];
  onCheckTask: (task: Task) => void;
}

const TasksList = ({ tasks, onCheckTask }: TasksListProps) => {
  return (
    <div className={styles.tasksList}>
      {tasks.map((task) => (
        <div key={task.description} className={styles.tasksList__task}>
          <input
            type="checkbox"
            checked={task.checked}
            onChange={() => onCheckTask(task)}
            id={task.description}
            className={styles.tasksList__taskInput}
          />
          <label
            htmlFor={task.description}
            className={styles.tasksList__taskLabel}
          >
            {task.description}
          </label>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
