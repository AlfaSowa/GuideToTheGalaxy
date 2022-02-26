/* eslint-disable react/button-has-type */
import { FC } from "react";
import styles from "./styles.module.scss";

interface IUserListButton {
  onClick: () => void;
}

const UserListButton: FC<IUserListButton> = ({ children, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    {children}
  </button>
);

export default UserListButton;
