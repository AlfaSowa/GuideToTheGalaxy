import { FC, useState } from "react";
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
import FormLogin from "../../forms/form-login/form-login.component";
import FormRegistration from "../../forms/form-registration-applicant/form-registration-applicant.component";
import { useAccount } from "../../../hooks/account/useAccount";

enum FormType {
  LOGIN = "login",
  REGISTR = "registration",
}

const UserNoAuth: FC = () => {
  const { fetchingAccount } = useAccount();
  const [openModal, setOpenModal] = useState<{ value: FormType }>(null);

  const router = useRouter();

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

        <Button
          variant="secondary"
          onClick={() => router.push("/auth/applicant")}
        >
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
            <FormLogin />
          </TabsPanel>
          <TabsPanel value={openModal?.value} index="registration">
            <FormRegistration />
          </TabsPanel>
        </CustomTabs>
      </Modal>
    </>
  );
};
export default UserNoAuth;
