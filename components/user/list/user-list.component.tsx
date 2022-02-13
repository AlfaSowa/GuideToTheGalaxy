import { FC } from "react";
import styles from "./styles.module.scss";

const UserList: FC = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default UserList;
