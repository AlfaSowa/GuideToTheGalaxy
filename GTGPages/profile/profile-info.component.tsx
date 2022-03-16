import { FC, useState } from "react";
import ProfileInfoItem from "./profile-info-item.component";
import styles from "./styles.module.scss";

const ProfileInfo: FC = () => (
  <div className={styles.info}>
    <div className={styles.info__item}>
      <ProfileInfoItem label="Имя" name="Иван" />
    </div>

    <div className={styles.info__item}>
      <ProfileInfoItem label="Фамилия" name="Иванов" />
    </div>

    <div className={styles.info__item}>
      <ProfileInfoItem label="email" name="1@1.com" />
    </div>
  </div>
);

export default ProfileInfo;
