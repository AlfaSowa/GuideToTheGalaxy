import clsx from 'clsx';
import { useStore } from 'effector-react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { ReactNode } from 'react';
import {
  $sidebarAction,
  toogleSidebarActionFx,
} from '../../models/actions';
import styles from './sidebar.module.scss';

interface SidebarProps {
  children: ReactNode
}

const Sidebar = ({ children }:SidebarProps): JSX.Element => {
  const sidebarAction = useStore($sidebarAction);

  return (
    <div
      className={clsx(styles.sidebar, {
        [styles.sidebar_active]: !sidebarAction,
      })}
    >
      <button
        className={styles.btn}
        onClick={() => toogleSidebarActionFx(!sidebarAction)}
        type='button'
      >
        {sidebarAction && <MenuOpenIcon />}
        {!sidebarAction && <MenuIcon />}
      </button>

      <div className={styles.inner}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
