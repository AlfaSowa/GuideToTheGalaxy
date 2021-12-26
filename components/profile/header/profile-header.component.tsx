import { useStore } from 'effector-react';
import {
  $account,
  fetchAccountDataFx,
} from '../../../models/account';
import Avatar from '../../ui/avatar/avatar.component';
import styles from './profile-header.module.scss';

const ProfileHeader = (): JSX.Element => {
  const account = useStore($account);
  const loadingAccountData = useStore(fetchAccountDataFx.pending);

  console.log('loadingAccountData', loadingAccountData);
  return (
    <div className={styles.root}>
      {loadingAccountData && (
        <div className={styles.skeleton}>Loading...</div>
      )}

      {!loadingAccountData && account && (
        <>
          <div className={styles.avatar}>
            <Avatar />
          </div>

          <div>{account.username}</div>
        </>
      )}
    </div>
  );
};

export default ProfileHeader;
