import { useEffect, useRef, useState } from 'react';
import SidebarMenu from './menu/menu.component';
import styles from './sidebar.module.scss';
import { useRouter } from 'next/router';

const Sidebar = (): JSX.Element => {
  return (
    <div className={styles.sidebar}>
      <div>123</div>
    </div>
  );
};

export default Sidebar;
