import clsx from "clsx";
import { FC } from "react";
import styles from "./styles.module.scss";

interface ISidebar {
  privateMode?: boolean;
}

const Sidebar: FC<ISidebar> = ({ children, privateMode }) => (
  <div className={clsx(styles.sidebar, { [styles.public]: !privateMode })}>
    <div className={styles.inner}>{children}</div>
  </div>
);

Sidebar.defaultProps = {
  privateMode: false,
};

export default Sidebar;
