import { FC, useCallback, useEffect, useRef } from "react";
import UserNavigationsMain from "../navigations/main/user-navigations-main.component";
import UserSettingsMain from "../navigations/settings/user-navigations-settings.component";
import UserProfile from "../profile/profile.component";
import styles from "./styles.module.scss";

interface IUserDropdown {
  setShowDropdown: (value: boolean) => void;
}

const UserDropdown: FC<IUserDropdown> = ({ setShowDropdown }) => {
  const dropRef = useRef<HTMLDivElement>(null);

  const handleEventListenerClick = useCallback(
    (e: Event) => {
      if (dropRef?.current && !dropRef?.current?.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    },
    [setShowDropdown]
  );

  useEffect(() => {
    document.addEventListener("click", handleEventListenerClick);

    return () => {
      document.removeEventListener("click", handleEventListenerClick);
    };
  }, [handleEventListenerClick]);

  return (
    <div className={styles.root} ref={dropRef}>
      <UserProfile />
      <UserNavigationsMain />
      <UserSettingsMain />
    </div>
  );
};

export default UserDropdown;
