import Link from 'next/link';
import {
  Item,
  dropdown,
  options,
  admin,
} from './dropdown-data';
import styles from './dropdown.module.scss';

const MiniProfileDropdown = (): JSX.Element => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown__block}>
        <nav className={styles.nav}>
          {dropdown.map((i: Item) => (
            <li>
              <Link href={i.route} key={i.id}>
                <a className={styles.nav__item}>{i.name}</a>
              </Link>
            </li>
          ))}
        </nav>
      </div>

      <div className={styles.dropdown__block}>
        <nav className={styles.nav}>
          {options.map((i: Item) => (
            <li>
              <Link href={i.route} key={i.id}>
                <a className={styles.nav__item}>{i.name}</a>
              </Link>
            </li>
          ))}
        </nav>
      </div>

      <div className={styles.dropdown__block}>
        <nav className={styles.nav}>
          {admin.map((i: Item) => (
            <li>
              <Link href={i.route} key={i.id}>
                <a className={styles.nav__item}>{i.name}</a>
              </Link>
            </li>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MiniProfileDropdown;
