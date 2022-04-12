import { FC } from "react";
import styles from "./styles.module.scss";

export const FormRow: FC = ({ children }) => (
  <div className={styles.root}>{children}</div>
);
