import { FC } from "react";
import styles from "./styles.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { $account } from "../../../models/account";
import { useStore } from "effector-react";
import { useAccount } from "../../../hooks/account/useAccount";
import { logout } from "../../../methods/account";

const UserAuth: FC = () => {
  const { fetchingAccount } = useAccount();

  return (
    <div className={styles.root}>
      {!fetchingAccount && (
        <button className={styles.avatar}>
          <AccountCircleIcon />
        </button>
      )}

      {fetchingAccount && <div>auth</div>}

      <div>
        <button
          onClick={() => {
            logout();
          }}
        >
          выход
        </button>
      </div>
    </div>
  );
};
export default UserAuth;
