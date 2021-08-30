import { ReactNode } from 'react';
import style from './item.module.scss';

interface GridItemProps {
  children: ReactNode;
}

const GridItem = ({ children }: GridItemProps): JSX.Element => (
  <div className={style.item}>{children}</div>
);

export default GridItem;
