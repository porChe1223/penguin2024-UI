import { ReactNode } from "react";
import styles from "./index.module.css";
export const WorkContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles["work-container"]}>{children}</div>
    </div>
  );
};
