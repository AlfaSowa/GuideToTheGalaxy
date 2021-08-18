import { makeStyles } from '@material-ui/core';
import Link from 'next/link';
import Container from '../lib/container/container.component';
import MiniProfile from '../mini-profile/mini-profile.component';
import Logo from '../ui/logo.component';
import { Navigation, navigation } from './header-data';
import styles from './header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>

        <div className={styles.header__content}>
          <MiniProfile />
        </div>
      </Container>
    </header>
  );
};

export default Header;
