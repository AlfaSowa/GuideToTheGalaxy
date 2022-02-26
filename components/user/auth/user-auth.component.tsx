import { FC, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./styles.module.scss";
import { useAccount } from "../../../hooks/account/useAccount";
import UserDropdown from "../dropdown/user-dropdown.components";

const UserAuth: FC = () => {
  const { fetchingAccount } = useAccount();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={styles.root}>
      {!fetchingAccount && (
        <button className={styles.avatar} onClick={handleClick} type="button">
          <AccountCircleIcon />
        </button>
      )}

      {fetchingAccount && <div>auth</div>}

      {showDropdown && <UserDropdown setShowDropdown={setShowDropdown} />}
    </div>
  );
};

export default UserAuth;
