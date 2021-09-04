import clsx from 'clsx';
import { useStore } from 'effector-react';
import Link from 'next/link';
import { $account } from '../../models/account';
import styles from './mini-profile.module.scss';
// import Avatar from '../../public/img/avatar.svg';

const MiniProfile = (): JSX.Element => {
  const account = useStore($account);

  console.log('account', account);

  return (
    <>
      {!account && (
        <Link href="/login">
          <a className={styles.text}>Вход</a>
        </Link>
      )}

      {account && (
        <Link href="/profile">
          <a className={styles.root}>
            <div className={styles.avatar}>
              {account?.avatar && <div />}
              {!account?.avatar && <div>{/* <Avatar /> */}</div>}
            </div>

            <div className={clsx(styles.text, 'link-base')}>
              {account.firstName}
            </div>
          </a>
        </Link>
      )}
    </>
  );
};

export default MiniProfile;
