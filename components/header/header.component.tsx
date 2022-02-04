import Logo from "@mui/icons-material/LocalBarSharp";
import Link from "next/link";
import { FC } from "react";
import Container from "../lib/container/container.component";
import UserMenu from "../user/menu/menu.component";
import styles from "./styles.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.root}>
      <Container alignCenter padding>
        <Link href="/">
          <a className={styles.logo}>
            <div className={styles.icon}>
              <Logo />
            </div>
            <span>Guide to the galaxy</span>
          </a>
        </Link>

        <div className={styles.inner}>
          <UserMenu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
