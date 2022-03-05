import clsx from "clsx";
import { FC } from "react";
import styles from "./styles.module.scss";

interface ContainerProps {
  alignCenter?: boolean;
  padding?: boolean;
  flex?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  alignCenter,
  padding,
  flex,
}) => (
  <div
    className={clsx(
      styles.root,
      { [styles.root__flex]: flex },
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
  flex: false,
};

export default Container;
