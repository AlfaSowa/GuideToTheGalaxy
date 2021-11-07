import { ReactNode } from 'react';
import styles from './grid.module.scss';

interface GridProps {
  children: ReactNode;
}
interface GridItemProps {
  children: ReactNode;
}

export const Grid = ({ children }: GridProps): JSX.Element => {
  return (
    <div className={styles.grid}>
      <div className={styles.grid__inner}>{children}</div>
    </div>
  );
};

export const GridItem = ({ children }: GridItemProps): JSX.Element => (
  <div className={styles.item}>{children}</div>
);
