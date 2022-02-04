import { FC, useState } from "react";
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
import FormRegistration from "../../forms/form-registration/form-registration.component";

type TypeModalForm = {
  value: "login" | "registration";
};

const UserNoAuth: FC = () => {
  const [openModal, setOpenModal] = useState<TypeModalForm>(null);

  return (
    <>
      <div className={styles.root}>
        <Button onClick={() => setOpenModal({ value: "login" })}>Вход</Button>
        <Button
          variant="secondary"
          onClick={() => setOpenModal({ value: "registration" })}
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
            onChange={(value) => setOpenModal({ value })}
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
