import clsx from "clsx";
import { useStore } from "effector-react";
import { ReactNode } from "react";
import { $sidebarIsOpen, sidebarToggleFx } from "../../models/sidebar";
import styles from "./sidebar.module.scss";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps): JSX.Element => {
  const sidebarIsOpen = useStore($sidebarIsOpen);

  return (
    <div className={styles.sidebar}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default Sidebar;
