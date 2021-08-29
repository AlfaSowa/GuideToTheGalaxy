import Link from 'next/link';
import Container from '../lib/container/container.component';
import MiniProfile from '../mini-profile/mini-profile.component';
import styles from './header.module.scss';

const Header = (): JSX.Element => (
    <header className={styles.header}>
      <Container alignCenter>
        <Link href="/">
          <a className={styles.logo}>GuideToTheGalaxy</a>
        </Link>

        <div className={styles.header__content}>
          <MiniProfile />
        </div>
      </Container>
    </header>
  );

export default Header;
