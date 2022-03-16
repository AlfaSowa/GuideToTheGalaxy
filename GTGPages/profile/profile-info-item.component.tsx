import { FC } from "react";
import styles from "./styles.module.scss";

interface IProfileInfoItem {
  label: string;
  name: string;
}

const ProfileInfoItem: FC<IProfileInfoItem> = ({ label, name }) => (
  <div className={styles.item}>
    <div className={styles.item__label}>{`${label}:`}</div>

    <div className={styles.item__name}>{name}</div>
  </div>
);

export default ProfileInfoItem;
