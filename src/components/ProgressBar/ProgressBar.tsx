import { useEffect, useRef } from "react";
import classNames from "classnames";

import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    progressRef.current?.style.setProperty("--progress-width", `${progress}%`);
  }, [progress]);

  return (
    <div className={styles.progressBar}>
      <div ref={progressRef} className={styles.progressBar__progress}>
        {progress > 0 && (
          <span
            className={classNames(styles.progressBar__progressValue, {
              [styles["progressBar__progressValue--outside"]]: progress < 10,
            })}
          >
            {progress}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
