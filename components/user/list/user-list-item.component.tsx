import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.scss";

interface IUserListItem {
  link?: string;
}

const UserListItem: FC<IUserListItem> = ({ children, link }) => {
  return link ? (
    <Link href={link}>
      <a className={styles.item}>{children}</a>
    </Link>
  ) : (
    <div className={styles.item}>{children}</div>
  );
};

export default UserListItem;
