import { FC } from "react";
import style from "./table.module.scss";

export const Table: FC = ({ children }) => (
  <table className={style.table}>{children}</table>
);

export const TableHead: FC = ({ children }) => (
  <thead className={style.table__head}>{children}</thead>
);

export const TableBody: FC = ({ children }) => (
  <tbody className={style.table__body}>{children}</tbody>
);

export const TableRow: FC = ({ children }) => (
  <tr className={style.table__row}>{children}</tr>
);

export const TableСell: FC = ({ children }) => (
  <td className={style.table__cell}>{children}</td>
);
