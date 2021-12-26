import { ReactNode } from 'react';

interface SidebarProps {
  children: ReactNode
}

const Sidebar = ({ children }:SidebarProps): JSX.Element => {
  // const sidebarAction = useStore($sidebarAction);

  return (
  // <div
  //   className={clsx(styles.sidebar, {
  //     [styles.sidebar_active]: !sidebarAction,
  //   })}
  // >
  //   <button
  //     className={styles.btn}
  //     onClick={() => toogleSidebarActionFx(!sidebarAction)}
  //     type='button'
  //   >
  //     {sidebarAction && <MenuOpenIcon />}
  //     {!sidebarAction && <MenuIcon />}
  //   </button>

    //   <div className={styles.inner}>
    //     {children}
    //   </div>
    // </div>
    <div>123</div>
  );
};

export default Sidebar;
