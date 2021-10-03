import clsx from 'clsx';
import { useStore } from 'effector-react';
import Link from 'next/link';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import {
  $sidebarAction,
  toogleSidebarActionFx,
} from '../../models/actions';
import { $pages } from '../../models/pages';
import Typography from '../ui/typography/typography.component';
import { sidebarNav } from './sidebar-data';
import styles from './sidebar.module.scss';
import SidebarNavigation from './menu/menu.component';

const Sidebar = (): JSX.Element => {
  const sidebarAction = useStore($sidebarAction);
  const pages = useStore($pages);

  console.log('pages', pages);

  return (
    <div
      className={clsx(styles.sidebar, {
        [styles.sidebar_active]: !sidebarAction,
      })}
    >
      <div className={clsx(styles.sidebar__header, { [styles.sidebar__header__exp]: !sidebarAction })}>
        <button
          className={styles.sidebar__btn}
          onClick={() => toogleSidebarActionFx(!sidebarAction)}
          type='button'
        >
          {sidebarAction && <MenuOpenIcon />}
          {!sidebarAction && <MenuIcon />}
        </button>
      </div>

      <div className={styles.sidebar__content}>
        <SidebarNavigation />
      </div>
    </div>
  );
};

export default Sidebar;
