import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.scss";

interface ISidebarMenuItem {
  link?: string;
}

const SidebarMenuItem: FC<ISidebarMenuItem> = ({ children, link }) => (
  <li className={styles.elem}>
    {!link && <div>{children}</div>}

    {link && (
      <Link href={link}>
        <a className={styles.link}>{children}</a>
      </Link>
    )}
  </li>
);

SidebarMenuItem.defaultProps = {
  link: null,
};

export default SidebarMenuItem;
