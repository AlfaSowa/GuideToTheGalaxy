import Link from "next/link";
import { FC, memo } from "react";
import styles from "./styles.module.scss";

const Logo: FC = () => (
  <Link href="/">
    <a className={styles.root}>
      <span>Guide to the galaxy</span>
    </a>
  </Link>
);

export default memo(Logo);
