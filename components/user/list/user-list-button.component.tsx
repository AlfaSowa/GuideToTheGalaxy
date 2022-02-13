import Link from "next/link";
import { FC } from "react";
import styles from "./styles.module.scss";

interface IUserListButton {
  onClick: () => void;
}

const UserListButton: FC<IUserListButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default UserListButton;
