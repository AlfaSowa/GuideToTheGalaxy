import clsx from "clsx";
import { useStore } from "effector-react";
import { FC } from "react";
import { $sidebarIsOpen } from "../../../models/sidebar";
import Typography from "../typography/typography.component";
import styles from "./main.module.scss";

interface IMainBlock {
  title?: string;
  noPadding?: boolean;
}

const MainBlock: FC<IMainBlock> = ({ children, title, noPadding }) => {
  const sidebarIsOpen = useStore($sidebarIsOpen);

  return (
    <main className={clsx(styles.root, { [styles.collapse]: sidebarIsOpen })}>
      {title && <Typography component="h1">{title}</Typography>}
      {children}
    </main>
  );
};

MainBlock.defaultProps = {
  title: null,
  noPadding: false,
};

export default MainBlock;
