import { ReactNode } from "react";
import style from "./table.module.scss";

interface TableProps {
  children: ReactNode;
}
interface CaptionProps {
  children: ReactNode;
}
interface TableHeadProps {
  children: ReactNode;
}
interface TableBodyProps {
  children: ReactNode;
}
interface TableRowProps {
  children: ReactNode;
}
interface TableСellProps {
  children: ReactNode;
}

export function Table({ children }: TableProps): JSX.Element {
  return <table className={style.table}>{children}</table>;
}
export function Caption({ children }: CaptionProps): JSX.Element {
  return <caption className={style.table__caption}>{children}</caption>;
}
export function TableHead({ children }: TableHeadProps): JSX.Element {
  return <thead className={style.table__head}>{children}</thead>;
}
export function TableBody({ children }: TableBodyProps): JSX.Element {
  return <tbody className={style.table__body}>{children}</tbody>;
}
export function TableRow({ children }: TableRowProps): JSX.Element {
  return <tr className={style.table__row}>{children}</tr>;
}
export function TableСell({ children }: TableСellProps): JSX.Element {
  return <td className={style.table__cell}>{children}</td>;
}
