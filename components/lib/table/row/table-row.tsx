import clsx from "clsx";
import { FC, MouseEvent } from "react";
import styles from "./styles.module.scss";

interface ITableRow {
  hover?: boolean;
  onClick?: (e?: MouseEvent<HTMLTableRowElement>) => void;
}

export const TableRow: FC<ITableRow> = ({ children, hover, onClick }) => (
  <tr
    className={clsx(styles.root, { [styles.hover]: hover })}
    onClick={onClick}
  >
    {children}
  </tr>
);

TableRow.defaultProps = {
  hover: false,
  onClick: null,
};
