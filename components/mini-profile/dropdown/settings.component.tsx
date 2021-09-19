import styles from './dropdown.module.scss';

const MiniProfileDropdownSettings = (): JSX.Element => {
  return (
    <div className={styles.menu}>
      {[1, 2, 3, 4, 5].map((i, idx) => (
        <div className={styles.menu__item}>
          <div className={styles.menu__icon} />
          <div className={styles.menu__text}>1231231231312</div>
        </div>
      ))}
    </div>
  );
};

export default MiniProfileDropdownSettings;
