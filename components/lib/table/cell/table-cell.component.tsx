import { createElement, FC } from "react";
import styles from "./styles.module.scss";

interface ITableСell {
  component?: "th" | "td";
  scope?: "row" | "col";
}

export const TableСell: FC<ITableСell> = ({ children, component, scope }) =>
  createElement(
    component,
    {
      className: styles.root,
      ...(component === "th" && { scope }),
    },
    children
  );

TableСell.defaultProps = {
  component: "td",
  scope: "row",
};
