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
import MiniProfileDropdown from './dropdown/dropdown.component';
import styles from './mini-profile.module.scss';

const MiniProfile = (): JSX.Element => {
  const account = useStore($account);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('Войти');

  const handleChange = (e) => {
    setValue(e.target.dataset.value);
  };

  return (
    <>
      {!account && (
        <button className={styles.text} onClick={() => setShow(true)}>
          Вход
        </button>
      )}

      {account && (
        <div className={styles.containe}>
          <div
            className={styles.avatar}
            onClick={() => setOpen(!open)}
            role='button'
          >
            {account?.image?.url && (
              <img src={account.image.url} alt='' />
            )}
            <div className={styles.name}>{account.username}</div>
          </div>

          {open && <MiniProfileDropdown />}
        </div>
      )}

      <Modal textHeader='Вход' open={show} onClose={setShow}>
        <CustomTabs>
          <Tabs onChange={handleChange}>
            <Tab
              text='Войти'
              value='Войти'
              focused={value === 'Войти'}
            />
            <Tab
              text='Зарегистрироваться'
              value='Зарегистрироваться'
              focused={value === 'Зарегистрироваться'}
            />
          </Tabs>

          <TabsPanel value={value} index='Войти'>
            <FormLogin />
          </TabsPanel>
          <TabsPanel value={value} index='Зарегистрироваться'>
            <FormRegistration />
          </TabsPanel>
        </CustomTabs>
      </Modal>
    </>
  );
};

export default MiniProfile;
