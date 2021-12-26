import { useStore } from 'effector-react';
import { $account } from '../../../models/account';
import styles from './dropdown.module.scss';

const MiniProfileDropdownInfo = (): JSX.Element => {
  const account = useStore($account);

  return (
    <div className={styles.info}>
      <div>123</div>
    </div>
  );
};

export default MiniProfileDropdownInfo;
