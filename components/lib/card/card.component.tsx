import style from './card.module.scss';

interface GridProps {
  children: any;
}

const Card = ({ children }: GridProps): JSX.Element => (
  <div className={style.card}>{children}</div>
);

export default Card;
