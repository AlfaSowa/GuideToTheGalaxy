import { useStore } from 'effector-react';
import Link from 'next/link';
import { $account } from '../../models/account';
import styles from './mini-profile.module.scss';

const MiniProfile = (): JSX.Element => {
  const account = useStore($account);

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
              {account?.avatar && <div></div>}
              {!account?.avatar && <div></div>}
            </div>

            <div className={styles.text}>{account.firstName}</div>
          </a>
        </Link>
      )}
    </>
  );
};

export default MiniProfile;
