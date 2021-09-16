import router from 'next/router';
import Image from '../../image/image.component';
import style from './card-base.module.scss';

type TypeCard = {
  id: string;
  name: string;
  images: any;
};

interface CardProps {
  item: TypeCard;
}

const Card = ({ item }: CardProps): JSX.Element => {
  const { id, name, images } = item;

  console.log('IMG', images[0].url);

  const onClickCard = () => {
    router.push(`/places/${id}`);
  };
  return (
    <div className={style.card}>
      <div className={style.content}>
        <div className={style.img}>
          <Image data={images[0].url} alt="test" />
        </div>
      </div>
    </div>
  );
};

export default Card;
