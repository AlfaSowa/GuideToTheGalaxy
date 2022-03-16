import { FC } from "react";
import ProfileHeader from "../../components/profile/header/profile-header.component";
import ProfileInfo from "./profile-info.component";
import styles from "./styles.module.scss";

const ProfilePage: FC = () => (
  <div className={styles.root}>
    <ProfileHeader />

    <ProfileInfo />
  </div>
);

export default ProfilePage;
