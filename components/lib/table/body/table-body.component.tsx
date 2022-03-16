import { FC } from "react";
import styles from "./styles.module.scss";

export const TableBody: FC = ({ children }) => (
  <tbody className={styles.root}>{children}</tbody>
);
