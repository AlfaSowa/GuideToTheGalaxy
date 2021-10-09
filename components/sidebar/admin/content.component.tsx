import Link from 'next/link';
import styles from './admin.module.scss';

const AdminContent = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link href='/profile/classes'>
            <a className={styles.nav__link}>Классы</a>
          </Link>
        </li>

        <li className={styles.nav__item}>
          <Link href='/profile/content'>
            <a className={styles.nav__link}>Оглавления</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminContent;
