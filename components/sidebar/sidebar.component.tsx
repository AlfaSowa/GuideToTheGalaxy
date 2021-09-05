import clsx from 'clsx';
import { useStore } from 'effector-react';
import Link from 'next/link';
import { $sidebarAction, toogleSidebarActionFx } from '../../models/actions';
import CustomText from '../ui/text/text.component';
import { sidebarNav } from './sidebar-data';
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
          className={styles.sidebar__btn}
          onClick={() => toogleSidebarActionFx(!sidebarAction)}
          type="button"
        >
          {'<<<<'}
        </button>
      </div>

      <div className={styles.sidebar__content}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            {sidebarNav.map((nav) => (
              <li className={styles.nav__item} key={nav.id}>
                <Link href="/">
                  <a
                    className={clsx(styles.nav__link, {
                      [styles.nav__link_expanded]: !sidebarAction,
                    })}
                  >
                    <div className={styles.nav__icon}>1</div>
                    {sidebarAction && (
                      <CustomText className={styles.nav__text}>
                        {nav.name}
                      </CustomText>
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
