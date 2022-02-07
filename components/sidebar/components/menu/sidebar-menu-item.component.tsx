import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.scss";

interface ISidebarMenuItem {
  link: string;
}

const SidebarMenuItem: FC<ISidebarMenuItem> = ({ children, link }) => {
  return (
    <li className={styles.elem}>
      <Link href={link}>
        <a className={styles.link}>{children}</a>
      </Link>
    </li>
  );
};

export default SidebarMenuItem;
