import clsx from "clsx";
import { createElement, FC } from "react";
import styles from "./styles.module.scss";

interface ITypography {
  component?: "span" | "p" | "h1" | "h5";
  className?: string;
  variant?: "text" | "subtext";
  darkMode?: boolean;
}

const Typography: FC<ITypography> = ({
  children,
  component,
  className,
  darkMode,
  variant,
}) =>
  createElement(
    component,
    {
      className: clsx(
        styles.root,
        { [styles.root__dark]: darkMode },
        { [className]: className },
        { [variant]: variant }
      ),
    },
    children
  );

Typography.defaultProps = {
  component: "span",
  className: null,
  variant: null,
  darkMode: false,
};

export default Typography;
