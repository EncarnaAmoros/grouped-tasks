import { useEffect, useCallback } from "react";
import { useIntl } from "react-intl";
import { GroupedTask } from "~/modules/Tasks/types/tasks";
import { GET_TASKS_URL } from "~/modules/Tasks/constants/tasksService";
import useTasksStore from "~/modules/Tasks/store/useTasksStore";
import { GroupedTasks } from "~/modules/Tasks/components";

import styles from "./GroupedTasksDemo.module.scss";

const GroupedTasksDemo = () => {
  const intl = useIntl();
  const setGroupedTasks = useTasksStore((state) => state.setGroupedTasks);

  const getTasksData = useCallback(async () => {
    const response = await fetch(GET_TASKS_URL);
    const data: GroupedTask[] = await response.json();
    setGroupedTasks(data);
  }, [setGroupedTasks]);

  useEffect(() => {
    getTasksData();
  }, [getTasksData]);

  return (
    <div className={styles.groupedTasksDemo}>
      <GroupedTasks title={intl.formatMessage({ id: "grouped.tasks" })} />
    </div>
  );
};

export default GroupedTasksDemo;
