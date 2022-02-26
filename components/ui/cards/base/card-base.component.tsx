import style from "./card-base.module.scss";

type TypeCard = {
  description: string;
  title: string;
};

interface CardProps {
  item: TypeCard;
}

function Card({ item }: CardProps): JSX.Element {
  const { description, title } = item;

  return (
    <div className={style.card}>
      <div className={style.content}>
        <div className={style.img}>
          <img src="https://via.placeholder.com/150x150" alt="123" />
        </div>

        <div className={style.text}>
          <span className={style.text__title}>{title}</span>
          <span className={style.text__description}>
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
