import { FC, memo } from "react";
import { useAccount } from "../../../hooks/account/useAccount";
import UserAuth from "../auth/user-auth.component";
import UserNoAuth from "../noauth/user-noauth.component";
import styles from "./styles.module.scss";

const UserMenu: FC = () => {
  const { token } = useAccount();

  return (
    <div className={styles.root}>
      {!token && <UserNoAuth />}
      {token && <UserAuth />}
    </div>
  );
};

export default memo(UserMenu);
