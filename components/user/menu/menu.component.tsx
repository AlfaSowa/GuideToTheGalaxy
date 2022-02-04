import { useStore } from "effector-react";
import { FC, useState } from "react";
import { $account, fetchAccountDataFx } from "../../../models/account";
import Button from "../../ui/button/button.component";
import UserAuth from "../auth/auth.component";
import UserNoAuth from "../noauth/noauth.component";
import styles from "./styles.module.scss";

const UserMenu: FC = () => {
  const account = useStore($account);
  const loadingAccountData = useStore(fetchAccountDataFx.pending);

  return (
    <div className={styles.root}>
      {!loadingAccountData && (
        <>
          {!account && <UserNoAuth />}
          {account && <UserAuth />}
        </>
      )}
    </div>
  );
};

export default UserMenu;
