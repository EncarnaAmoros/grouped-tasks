import { useEffect, useRef } from "react";

import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    progressRef.current?.style.setProperty("--progress-width", `${progress}%`);
  }, [progress]);

  console.log(progress);

  return (
    <div className={styles.progressBar}>
      <div ref={progressRef} className={styles.progressBar__progress}>
        <span className={styles.progressBar__progressValue}>{progress}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
