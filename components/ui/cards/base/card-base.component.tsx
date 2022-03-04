import { FC } from "react";
import style from "./styles.module.scss";

type TypeCard = {
  description: string;
  title: string;
};

interface CardProps {
  item: TypeCard;
}

const Card: FC<CardProps> = ({ item }) => {
  const { description, title } = item;

  return (
    <div className={style.card}>
      <div className={style.content}>
        <div className={style.img}>
          <img src="https://via.placeholder.com/150x150" alt="123" />
        </div>

        <div className={style.text}>
          <span className={style.text__title}>{title}</span>
          <span className={style.text__description}>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
