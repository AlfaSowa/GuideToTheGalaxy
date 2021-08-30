import { ReactNode } from 'react';
import style from './card.module.scss';

interface GridProps {
  children: ReactNode;
}

const Card = ({ children }: GridProps): JSX.Element => (
  <div className={style.card}>{children}</div>
);

export default Card;
