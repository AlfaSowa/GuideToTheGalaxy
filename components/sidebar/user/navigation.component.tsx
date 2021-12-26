import { useStore } from 'effector-react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import clsx from 'clsx';
import Link from 'next/link';
import PublicIcon from '@mui/icons-material/Public';
import ExploreIcon from '@mui/icons-material/Explore';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import styles from './user.module.scss';
import Typography from '../../ui/typography/typography.component';

const UserNavigation = (): JSX.Element => {
  // const pages = useStore($pages);
  // const sidebarAction = useStore($sidebarAction);

  // const getIcon = (alias) => {
  //   switch (alias) {
  //     case 'world':
  //       return <PublicIcon />;
  //     case 'adventures':
  //       return <ExploreIcon />;
  //     case 'game':
  //       return <VideogameAssetIcon />;
  //     default:
  //       return <AcUnitIcon />;
  //   }
  // };

  return (
    <nav className={styles.nav}>
      {/* {pages.map((page) => (
        <Link href={`/${page.alias}`}>
          <a className={styles.link}>
            <div className={styles.icon}>{getIcon(page.alias)}</div>

            <Typography className={clsx(styles.text, { [styles.text__hide]: !sidebarAction })}>
              {page.name}
            </Typography>
          </a>
        </Link>
      ))} */}
    </nav>
  );
};

export default UserNavigation;
