import clsx from "clsx";
import { FC } from "react";
import styles from "./container.module.scss";

interface ContainerProps {
  alignCenter?: boolean;
  padding?: boolean;
}

const Container: FC<ContainerProps> = ({ children, alignCenter, padding }) => (
  <div
    className={clsx(
      styles.root,
      { [styles.root__aligncenter]: alignCenter },
      { [styles.root__padding]: padding }
    )}
  >
    {children}
  </div>
);

Container.defaultProps = {
  alignCenter: false,
  padding: false,
};

export default Container;
