import clsx from "clsx";
import { FC } from "react";
import Container from "../../lib/container/container.component";
import Typography from "../typography/typography.component";
import styles from "./styles.module.scss";

interface IMainBlock {
  title?: string;
  padding?: boolean;
  privateMode?: boolean;
}

const MainBlock: FC<IMainBlock> = ({
  children,
  title,
  padding,
  privateMode,
}) => (
  <main className={clsx(styles.root, { [styles.public]: !privateMode })}>
    <Container padding={padding}>
      {title && <Typography component="h1">{title}</Typography>}
      {children}
    </Container>
  </main>
);

MainBlock.defaultProps = {
  title: null,
  padding: false,
  privateMode: false,
};

export default MainBlock;
