/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import clsx from 'clsx';
import { useStore } from 'effector-react';
import Link from 'next/link';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  $account,
  fetchAccountDataFx,
} from '../../models/account';
import FormLogin from '../forms/form-login/form-login.component';
import FormRegistration from '../forms/form-registration/form-registration.component';
import Modal from '../lib/modal/modal.component';
import {
  CustomTabs,
  Tab,
  Tabs,
  TabsPanel,
} from '../lib/tabs/tabs.component';
import Button from '../ui/button/button.component';
import MiniProfileDropdown from './dropdown/dropdown.component';
import styles from './mini-profile.module.scss';

type TypeModalForm = {
  value: 'login' | 'registration',
};

const MiniProfile = (): JSX.Element => {
  const account = useStore($account);
  const loadingAccountData = useStore(fetchAccountDataFx.pending);
  const [openModal, setOpenModal] = useState<TypeModalForm>(null);

  return (
    <div className={styles.root}>
      {!loadingAccountData && (
        <>
          {!account && (
            <div className={styles.actions}>
              <Button onClick={() => setOpenModal({ value: 'login' })}>Вход</Button>
              <Button variant='secondary' onClick={() => setOpenModal({ value: 'registration' })}>Регистрация</Button>
            </div>
          )}

          {account && (
            <div className={styles.containe}>
              <Link href='/profile'>
                <a>{account.username}</a>
              </Link>
            </div>
          )}

          {!account && (
            <Modal textHeader='Вход' open={!!openModal} onClose={() => setOpenModal(null)}>
              <CustomTabs>
                <Tabs value={openModal?.value} onChange={(value) => setOpenModal({ value })}>
                  <Tab value='login'>Войти</Tab>
                  <Tab value='registration'>Зарегистрироваться</Tab>
                </Tabs>

                <TabsPanel value={openModal?.value} index='login'>
                  <FormLogin />
                </TabsPanel>
                <TabsPanel value={openModal?.value} index='registration'>
                  <FormRegistration />
                </TabsPanel>
              </CustomTabs>
            </Modal>
          )}
        </>
      )}

      {loadingAccountData && <div>12312313123123123</div>}
    </div>
  );
};

export default MiniProfile;
