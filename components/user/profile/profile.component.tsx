import { FC } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAccount } from "../../../hooks/account/useAccount";
import styles from "./styles.module.scss";

const UserProfile: FC = () => {
  const { account } = useAccount();
  return (
    <div className={styles.root}>
      <div className={styles.avatar}>
        <AccountCircleIcon />
      </div>
      <div>{account?.username}</div>
    </div>
  );
};
export default UserProfile;
