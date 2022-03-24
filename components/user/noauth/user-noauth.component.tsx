import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import Button from "../../ui/button/button.component";
import styles from "./styles.module.scss";
import { useAccount } from "../../../hooks/account/useAccount";

const UserNoAuth: FC = () => {
  const { fetchingAccount } = useAccount();

  const router = useRouter();

  const handleClickRegistration = useCallback(() => {
    router.push("/auth/applicant");
  }, [router]);

  const handleClickLogin = useCallback(() => {
    router.push("/account/applicant");
  }, [router]);

  if (fetchingAccount) {
    return (
      <div>
        <div>noauth</div>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <Button onClick={handleClickLogin}>Вход</Button>

      <Button variant="secondary" onClick={handleClickRegistration}>
        Регистрация
      </Button>
    </div>
  );
};
export default UserNoAuth;
