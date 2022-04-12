import { FC } from "react";
import styles from "./styles.module.scss";

export const TableHead: FC = ({ children }) => (
  <thead className={styles.root}>{children}</thead>
);
