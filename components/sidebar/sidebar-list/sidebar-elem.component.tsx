import Link from "next/link";
import { FC } from "react";
import styles from "./sidebar-list.module.scss";

interface ISidebarListElem {
  link: string;
}

const SidebarListElem: FC<ISidebarListElem> = ({
  children,
  link,
}): JSX.Element => {
  return (
    <li className={styles.elem}>
      <Link href={link}>
        <a className={styles.link}>{children}</a>
      </Link>
    </li>
  );
};

export default SidebarListElem;
