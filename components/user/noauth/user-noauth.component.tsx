import { FC, useCallback, useState } from "react";
import { useRouter } from "next/router";
import Button from "../../ui/button/button.component";
import styles from "./styles.module.scss";
import Modal from "../../lib/modal/modal.component";
import {
  CustomTabs,
  Tab,
  Tabs,
  TabsPanel,
} from "../../lib/tabs/tabs.component";
import { useAccount } from "../../../hooks/account/useAccount";
import ApplicantLoginForm from "../../forms/applicant/login/applicant-login.component";
import ApplicantRegistrationForm from "../../forms/applicant/registration/applicant-registration.component";

enum FormType {
  LOGIN = "login",
  REGISTR = "registration",
}

const UserNoAuth: FC = () => {
  const { fetchingAccount } = useAccount();
  const [openModal, setOpenModal] = useState<{ value: FormType }>(null);

  const router = useRouter();

  const handleClickRegistration = useCallback(() => {
    router.push("/auth/applicant");
  }, [router]);

  if (fetchingAccount) {
    return (
      <div>
        <div>noauth</div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.root}>
        <Button onClick={() => setOpenModal({ value: FormType.LOGIN })}>
          Вход
        </Button>

        <Button variant="secondary" onClick={handleClickRegistration}>
          Регистрация
        </Button>
      </div>

      <Modal
        textHeader="Вход"
        open={!!openModal}
        onClose={() => setOpenModal(null)}
      >
        <CustomTabs>
          <Tabs
            value={openModal?.value}
            onChange={(value: FormType) => setOpenModal({ value })}
          >
            <Tab value="login">Войти</Tab>
            <Tab value="registration">Зарегистрироваться</Tab>
          </Tabs>

          <TabsPanel value={openModal?.value} index="login">
            <ApplicantLoginForm />
          </TabsPanel>

          <TabsPanel value={openModal?.value} index="registration">
            <ApplicantRegistrationForm />
          </TabsPanel>
        </CustomTabs>
      </Modal>
    </>
  );
};
export default UserNoAuth;
