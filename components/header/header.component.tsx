import { makeStyles } from '@material-ui/core';
import Link from 'next/link';
import Container from '../lib/container.component';
import MiniProfile from '../mini-profile/mini-profile.component';
import Logo from '../ui/logo.component';
import { Navigation, navigation } from './header-data';
import styles from './header.module.scss';

const useStyles = makeStyles((theme) => ({
  header: {
    height: '42px',
    background: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    margin: '0 16px 0 0',
  },
  profile: {
    margin: '0 0 0 auto',
  },
}));

const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.logo}>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>

        <div className={classes.profile}>
          <MiniProfile />
        </div>
      </Container>
    </header>
  );
};

export default Header;
