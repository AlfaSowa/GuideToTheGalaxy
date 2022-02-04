import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.scss";

interface ISidebarListElem {
  link: string;
}

const SidebarListElem: FC<ISidebarListElem> = ({ children, link }) => {
  return (
    <li className={styles.elem}>
      <Link href={link}>
        <a className={styles.link}>{children}</a>
      </Link>
    </li>
  );
};

export default SidebarListElem;
