import { FC } from "react";
import styles from "./styles.module.scss";

interface IUserListButton {
  onClick: () => void;
}

const UserListButton: FC<IUserListButton> = ({ children, onClick }) => (
  <button onClick={onClick} className={styles.button} type="button">
    {children}
  </button>
);

export default UserListButton;
