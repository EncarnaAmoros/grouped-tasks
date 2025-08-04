import { ReactElement, useState } from "react";
import { useIntl } from "react-intl";
import { TaskIcon, ChevronDown, ChevronUp } from "~/assets/icons";

import styles from "./GroupTask.module.scss";

interface GroupTaskProps {
  name: string;
  icon?: ReactElement;
}

const GroupTask = ({ name, icon }: GroupTaskProps) => {
  const intl = useIntl();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.groupTask}>
      <div className={styles.groupTask__title}>
        <div className={styles.groupTask__titleIcon}>
          {icon || <TaskIcon />}
        </div>
        <span className={styles.groupTask__titleText}>{name}</span>
      </div>

      <div className={styles.groupTask__action}>
        <span
          className={styles.groupTask__actionText}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {intl.formatMessage({ id: isExpanded ? "hide" : "show" })}
        </span>
        {isExpanded ? <ChevronDown /> : <ChevronUp />}
      </div>
    </div>
  );
};

export default GroupTask;
