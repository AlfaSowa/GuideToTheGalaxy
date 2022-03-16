import { FC } from "react";
import styles from "./styles.module.scss";

export const Table: FC = ({ children }) => (
  <table className={styles.root}>{children}</table>
);
