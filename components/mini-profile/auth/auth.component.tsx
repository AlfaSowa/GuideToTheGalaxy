import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useStore } from 'effector-react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { $account } from '../../../models/account';
import styles from './auth.module.scss';

const MiniProfileAuth:NextPage = (): JSX.Element => {
  const account = useStore($account);
  const [isOpenDrop, setIsOpenDrop] = useState(false);

  return (
    <div className={styles.root}>
      <button className={styles.btn} onClick={() => setIsOpenDrop(!isOpenDrop)} type='button'>
        <AccountCircleIcon />
      </button>

      <div className={styles.drop}>
        <Link href='/profile'>
          <a className={styles.link}>
            <span>{account.username}</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MiniProfileAuth;
