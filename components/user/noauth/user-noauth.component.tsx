import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import Button from "../../ui/button/button.component";
import styles from "./styles.module.scss";

const UserNoAuth: FC = () => {
  const router = useRouter();

  const handleClickRegistration = useCallback(() => {
    router.push("/auth/applicant");
  }, [router]);

  const handleClickLogin = useCallback(() => {
    router.push("/login/applicant");
  }, [router]);

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
