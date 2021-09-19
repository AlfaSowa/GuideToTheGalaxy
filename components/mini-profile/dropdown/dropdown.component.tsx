import styles from './dropdown.module.scss';
import MiniProfileDropdownInfo from './info.component';
import MiniProfileDropdownSettings from './settings.component';

const MiniProfileDropdown = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <MiniProfileDropdownInfo />
      </div>

      <div className={styles.item}>
        <MiniProfileDropdownSettings />
      </div>

      <div className={styles.item}>
        <MiniProfileDropdownSettings />
      </div>
    </div>
  );
};

export default MiniProfileDropdown;
