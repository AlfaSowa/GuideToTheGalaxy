import { useStore } from 'effector-react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import clsx from 'clsx';
import Link from 'next/link';
import PublicIcon from '@mui/icons-material/Public';
import ExploreIcon from '@mui/icons-material/Explore';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { $pages } from '../../../models/pages';
import styles from './user.module.scss';
import { $sidebarAction } from '../../../models/actions';
import Typography from '../../ui/typography/typography.component';

const UserNavigationItem = ({ page }: any) => {
  const sidebarAction = useStore($sidebarAction);

  const getIcon = (alias) => {
    switch (alias) {
      case 'world':
        return <PublicIcon />;
      case 'adventures':
        return <ExploreIcon />;
      case 'game':
        return <VideogameAssetIcon />;
      default:
        return <AcUnitIcon />;
    }
  };

  return (
    <li key={page._id} className={styles.nav__item}>
      <Link href={`/${page.alias}`}>
        <a
          className={clsx(styles.nav__link, {
            [styles.nav__link_expanded]: !sidebarAction,
          })}
        >
          <div className={styles.nav__icon}>
            {getIcon(page.alias)}
          </div>

          {sidebarAction && (
            <Typography className={styles.nav__text}>
              {page.name}
            </Typography>
          )}

        </a>
      </Link>

      <div className={clsx(styles.nav__drop, { [styles.nav__drop__exp]: !sidebarAction })}>
        <div className={styles.nav__drop__inner}>
          {page?.chapters.map((part) => (
            <div className={styles.nav__drop__item} key={part.alias}>
              <AcUnitIcon />
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

const UserNavigation = (): JSX.Element => {
  const pages = useStore($pages);

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {pages.map((page) => (
          <UserNavigationItem page={page} />
        ))}
      </ul>
    </nav>
  );
};

export default UserNavigation;
