import { useStore } from 'effector-react';
import styles from './dropdown.module.scss';
import { $account } from '../../../models/account';

const MiniProfileDropdownInfo = (): JSX.Element => {
  const account = useStore($account);

  return (
    <div className={styles.info}>
      {account?.image?.url && (
        <div className={styles.info__avatar}>
          <img
            src={account.image.url}
            alt=''
          />
        </div>
      )}

      <div>{account?.firstName}</div>
    </div>
  );
};

export default MiniProfileDropdownInfo;
