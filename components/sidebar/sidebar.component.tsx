import clsx from 'clsx';
import { useStore } from 'effector-react';
import Link from 'next/link';
import { $sidebarAction, toogleSidebarActionFx } from '../../models/actions';
import styles from './sidebar.module.scss';

const Sidebar = (): JSX.Element => {
  const sidebarAction = useStore($sidebarAction);

  return (
    <div
      className={clsx(styles.sidebar, {
        [styles.sidebar_active]: !sidebarAction,
      })}
    >
      <div className={styles.sidebar__header}>
        <button
          onClick={() => toogleSidebarActionFx(!sidebarAction)}
          type="button"
        >
          {'<<<<'}
        </button>
      </div>

      <div className={styles.sidebar__content}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <Link href="/">
                <a className={styles.nav__link}>
                  <div className={styles.nav__icon}>1</div>
                  {sidebarAction && <div>asdasdasdsadasd</div>}
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/">
                <a className={styles.nav__link}>
                  <div className={styles.nav__icon}>1</div>
                  {sidebarAction && <div>asdasdasdsadasd</div>}
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/">
                <a className={styles.nav__link}>
                  <div className={styles.nav__icon}>1</div>
                  {sidebarAction && <div>asdasdasdsadasd</div>}
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/">
                <a className={styles.nav__link}>
                  <div className={styles.nav__icon}>1</div>
                  {sidebarAction && <div>asdasdasdsadasd</div>}
                </a>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="/">
                <a className={styles.nav__link}>
                  <div className={styles.nav__icon}>1</div>
                  {sidebarAction && <div>asdasdasdsadasd</div>}
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
