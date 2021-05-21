import { useEffect, useState } from 'react';
import { $account } from '../../../models/account';
import MiniProfileDropdown from './dropdown/dropdown.component';
import styles from './mini-profile.module.scss';

const MiniProfile123 = (): JSX.Element => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.profile}>
      <div
        className={styles.profile__avatar}
        onClick={() => setIsShow(!isShow)}
      >
        <img
          src="https://test.b2btrade.ru/uploads/20210216085428-b77bcafa-4ff9-4eb1-87cb-1d45427de2af-source.png"
          alt="logo"
        />
      </div>

      {isShow && <MiniProfileDropdown />}
    </div>
  );
};

export default MiniProfile123;
