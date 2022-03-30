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
  privateMode?: boolean;
}

const MainBlock: FC<IMainBlock> = ({
  children,
  title,
  padding,
  privateMode,
}) => {
  const sidebarIsOpen = useStore($sidebarIsOpen);

  return (
    <main
      className={clsx(
        styles.root,
        { [styles.collapse]: sidebarIsOpen },
        { [styles.public]: !privateMode }
      )}
    >
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
  privateMode: false,
};

export default MainBlock;
