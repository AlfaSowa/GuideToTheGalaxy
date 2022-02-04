import { FC } from "react";
import styles from "./styles.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { $account } from "../../../models/account";
import { useStore } from "effector-react";

const UserAuth: FC = () => {
  // const account = useStore($account);

  return (
    <div className={styles.root}>
      <button className={styles.avatar}>
        <AccountCircleIcon />
      </button>

      {/* <div className={styles.drop}>
        <Link href="/profile">
          <a className={styles.link}>
            <span>{account.username}</span>
          </a>
        </Link>
      </div> */}
    </div>
  );
};
export default UserAuth;
