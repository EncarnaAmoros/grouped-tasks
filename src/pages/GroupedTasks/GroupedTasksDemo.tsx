import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { GroupedTask } from "~/modules/Tasks/types/tasks";
import { GroupedTasks } from "~/modules/Tasks/components";

import styles from "./GroupedTasksDemo.module.scss";

const TASKS_URL =
  "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress";

const GroupedTasksDemo = () => {
  const intl = useIntl();
  const [groupedTasks, setGroupedTasks] = useState<GroupedTask[]>([]);

  useEffect(() => {
    fetch(TASKS_URL)
      .then((res) => res.json())
      .then((data: GroupedTask[]) => setGroupedTasks(data));
  }, []);

  return (
    <div className={styles.groupedTasksDemo}>
      <GroupedTasks
        title={intl.formatMessage({ id: "grouped.tasks" })}
        groupedTasks={groupedTasks}
      />
    </div>
  );
};

export default GroupedTasksDemo;
