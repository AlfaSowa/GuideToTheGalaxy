import { useRef, useState } from 'react';
import { SidebarNav, sidebarNav } from '../sidebar-data';
import styles from './menu.module.scss';

const SidebarMenu = (): JSX.Element => {
  return (
    <ul className={styles.nav}>
      {sidebarNav.map((i: SidebarNav) => (
        <NavItem item={i} />
      ))}
    </ul>
  );
};

const NavItem = ({ item }) => {
  const [isShow, setIsShow] = useState(false);
  const [isHeight, setHeight] = useState(0);
  const refNesting = useRef(null);

  const toggleNesting = () => {
    setIsShow(!isShow);
    if (refNesting?.current) {
      setHeight(!isShow ? refNesting.current.offsetHeight : 0);
    }
  };

  return (
    <li className={styles.nav__item}>
      <div className={styles.nav__link} onClick={toggleNesting}>
        <div>{item.name}</div>
        {item.nesting && <div>1</div>}
      </div>

      {item.nesting && (
        <div className={styles.nesting} style={{ height: isHeight }}>
          <div ref={refNesting}>
            {item.nesting.map((y) => (
              <div className={styles.nesting__item}>{y.name}</div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default SidebarMenu;
