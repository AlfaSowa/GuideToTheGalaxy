import { useAccount } from "../../../hooks/account/useAccount";
import Avatar from "../../ui/avatar/avatar.component";
import styles from "./profile-header.module.scss";

const ProfileHeader = (): JSX.Element => {
  const { account, fetchingAccount } = useAccount();

  return (
    <div className={styles.root}>
      {fetchingAccount && <div className={styles.skeleton}>Loading...</div>}

      {!fetchingAccount && account && (
        <>
          <div className={styles.avatar}>
            <Avatar />
          </div>

          <div>{account.username}</div>
        </>
      )}
    </div>
  );
};

export default ProfileHeader;
