import { ReactNode } from "react";
import styles from "./grid.module.scss";

interface GridProps {
  children: ReactNode;
}
interface GridItemProps {
  children: ReactNode;
}

export function Grid({ children }: GridProps): JSX.Element {
  return (
    <div className={styles.grid}>
      <div className={styles.grid__inner}>{children}</div>
    </div>
  );
}

export function GridItem({ children }: GridItemProps): JSX.Element {
  return <div className={styles.item}>{children}</div>;
}
