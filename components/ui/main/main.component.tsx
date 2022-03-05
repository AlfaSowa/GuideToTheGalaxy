import clsx from "clsx";
import { useStore } from "effector-react";
import { FC } from "react";
import { $sidebarIsOpen } from "../../../models/sidebar";
import Container from "../../lib/container/container.component";
import Typography from "../typography/typography.component";
import styles from "./styles.module.scss";

interface IMainBlock {
  title?: string;
  padding?: boolean;
}

const MainBlock: FC<IMainBlock> = ({ children, title, padding }) => {
  const sidebarIsOpen = useStore($sidebarIsOpen);

  return (
    <main className={clsx(styles.root, { [styles.collapse]: sidebarIsOpen })}>
      <Container padding={padding}>
        {title && <Typography component="h1">{title}</Typography>}
        {children}
      </Container>
    </main>
  );
};

MainBlock.defaultProps = {
  title: null,
  padding: false,
};

export default MainBlock;
