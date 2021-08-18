import { useStore } from 'effector-react';
import Link from 'next/link';
import { $account } from '../../models/account';
import styles from './mini-profile.module.scss';

const MiniProfile = (): JSX.Element => {
  const account = useStore($account);

  console.log('account', account);

  return (
    <>
      {!account && (
        <Link href="/login">
          <a>Вход</a>
        </Link>
      )}

      {account && (
        <div className={styles.root}>
          <div className={styles.avatar}>
            {account?.avatar && <div></div>}
            {!account?.avatar && <div></div>}
          </div>

          <div>Имя</div>
        </div>
      )}
    </>
  );
};

export default MiniProfile;
