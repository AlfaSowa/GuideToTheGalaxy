/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { FC, useCallback, useEffect, useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./styles.module.scss";
import { useAccount } from "../../../hooks/account/useAccount";
import UserNavigationsMain from "../navigations/main/user-navigations-main.component";
import UserSettingsMain from "../navigations/settings/user-navigations-settings.component";
import UserProfile from "../profile/profile.component";

const UserAuth: FC = () => {
  const { fetchingAccount } = useAccount();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropRef = useRef<any>(null);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleEventListenerClick = useCallback(
    (e) => {
      console.log(showDropdown);
      if (
        showDropdown &&
        dropRef?.current &&
        !dropRef?.current?.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    },
    [showDropdown]
  );

  useEffect(() => {
    document.addEventListener("click", handleEventListenerClick);

    return () => {
      document.removeEventListener("click", handleEventListenerClick);
    };
  }, [handleEventListenerClick]);

  return (
    <div className={styles.root}>
      {!fetchingAccount && (
        <button className={styles.avatar} onClick={handleClick} type="button">
          <AccountCircleIcon />
        </button>
      )}

      {fetchingAccount && <div>auth</div>}

      {showDropdown && (
        <div className={styles.drop} ref={dropRef}>
          <UserProfile />
          <UserNavigationsMain />
          <UserSettingsMain />
        </div>
      )}
    </div>
  );
};
export default UserAuth;
