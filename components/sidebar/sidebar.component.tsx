import { useEffect, useRef, useState } from 'react';
import SidebarMenu from './menu/menu.component';
import styles from './sidebar.module.scss';
import { useRouter } from 'next/router';

const Sidebar = ({ title }): JSX.Element => {
  const router = useRouter();

  const goBack = () => {
    if (['/places/[id]'].includes(router.route)) {
      router.push('/places');
    }
  };

  const checkBackButton = () => ['/places/[id]'].includes(router.route);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__header}>
          {checkBackButton() && (
            <button
              className={styles.sidebar__back}
              onClick={goBack}
              type="button"
            >
              назад
            </button>
          )}
          <h1>{title}</h1>
        </div>
      </div>

      <div className={styles.sidebar__block}>
        <SidebarMenu />
      </div>
    </div>
  );
};

export default Sidebar;
