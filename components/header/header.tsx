import { FC } from "react";
import Container from "../lib/container/container";
import Logo from "../lib/logo/logo";
import UserMenu from "../user/menu/user-menu";
import styles from "./styles.module.scss";

const Header: FC = () => (
  <header className={styles.root}>
    <Container alignCenter padding flex>
      <Logo />

      <div className={styles.inner}>
        <UserMenu />
      </div>
    </Container>
  </header>
);

export default Header;
