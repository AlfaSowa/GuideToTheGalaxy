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
import { $account } from '../../models/account';
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
  const [openModal, setOpenModal] = useState<TypeModalForm>(null);

  return (
    <div className={styles.root}>
      {!account && (
        <div className={styles.actions}>
          <Button onClick={() => setOpenModal({ value: 'login' })}>Вход</Button>
          <Button variant='secondary' onClick={() => setOpenModal({ value: 'registration' })}>Регистрация</Button>
        </div>
      )}

      {/* {account && (
        <div className={styles.containe}>
          <div
            className={styles.avatar}
            onClick={() => setOpen(!open)}
            role='button'
          >
            {account?.image?.url && (
              <img src={account.image.url} alt='' />
            )}
            <div className={styles.name}>
              <Link href='/profile'>
                <a>{account.username}</a>
              </Link>
            </div>
          </div>
        </div>
      )} */}

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
    </div>
  );
};

export default MiniProfile;
