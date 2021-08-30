import { ReactNode } from 'react';
import style from './list.module.scss';

interface GridProps {
  children: ReactNode;
}

const GridList = ({ children }: GridProps): JSX.Element => (
  <div className={style.grid}>{children}</div>
);

export default GridList;
