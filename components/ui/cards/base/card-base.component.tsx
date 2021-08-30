import style from './card-base.module.scss';

type TypeCard = {
  id: number;
  name: string;
  country: string;
  img: string;
};

interface CardProps {
  item: TypeCard;
}

const Card = ({ item }: CardProps): JSX.Element => (
  <div className={style.card}>
    <div>{item?.id}</div>
    <div>{item?.name}</div>
    <div>{item?.country}</div>
  </div>
);

export default Card;
