import { FC } from "react";
import styles from "./styles.module.scss";

const Sidebar: FC = ({ children }) => (
  <div className={styles.sidebar}>
    <div className={styles.inner}>{children}</div>
  </div>
);

export default Sidebar;
