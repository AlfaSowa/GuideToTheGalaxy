import { FC } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./styles.module.scss";

const UserProfile: FC = () => (
  <div className={styles.root}>
    <div className={styles.avatar}>
      <AccountCircleIcon />
    </div>
    <div>username</div>
  </div>
);
export default UserProfile;
