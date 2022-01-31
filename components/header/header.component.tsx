import Logo from '@mui/icons-material/LocalBarSharp';
import Link from 'next/link';
import Container from '../lib/container/container.component';
import MiniProfile from '../mini-profile/mini-profile.component';
import styles from './header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.root}>
      <Container alignCenter padding>
        <Link href='/'>
          <a className={styles.logo}>
            <div className={styles.icon}>
              <Logo />
            </div>
            <span>Guide to the galaxy</span>
          </a>
        </Link>

        <div className={styles.content}>
          <MiniProfile />
        </div>
      </Container>
    </header>
  );
};

export default Header;
