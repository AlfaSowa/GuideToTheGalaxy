import Link from 'next/link';
import Container from '../lib/container/container.component';
import { Navigation, navigation } from './header-data';
import styles from './header.module.scss';
import MiniProfile from './mini-profile/mini-profile.component';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <div className={styles.logo}>GuideToTheGalaxy</div>

        <nav className={styles.nav}>
          {navigation.map((i: Navigation, idx) => (
            <li className={styles.nav__item} key={idx}>
              <Link key={i.id} href={i.route}>
                <a>{i.name}</a>
              </Link>
            </li>
          ))}
        </nav>

        <MiniProfile />
      </Container>
    </header>
  );
};

export default Header;
