import { ReactNode } from 'react';
import style from './table.module.scss';

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

export const Table = ({ children }: TableProps): JSX.Element => (
	<table className={style.table}>{children}</table>
);
export const Caption = ({ children }: CaptionProps): JSX.Element => (
	<caption className={style.table__caption}>{children}</caption>
);
export const TableHead = ({ children }: TableHeadProps): JSX.Element => (
	<thead className={style.table__head}>{children}</thead>
);
export const TableBody = ({ children }: TableBodyProps): JSX.Element => (
	<tbody className={style.table__body}>{children}</tbody>
);
export const TableRow = ({ children }: TableRowProps): JSX.Element => (
	<tr className={style.table__row}>{children}</tr>
);
export const TableСell = ({ children }: TableСellProps): JSX.Element => (
	<td className={style.table__cell}>{children}</td>
);
