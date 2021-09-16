import style from './places.module.scss';

interface PlaceIdProps {
  item: TypeCard;
}

type TypeCard = {
  id: number;
  description: string;
  name: string;
  country: string;
  img: string;
};

const PlaceId = ({ item }: PlaceIdProps): JSX.Element => {
  const { country, description, id, img, name } = item;

  return (
    <div className={style.root}>
      <div>{country}</div>
      <div>{description}</div>
      <div>{id}</div>
      <div>{img}</div>
      <div>{name}</div>
    </div>
  );
};

export default PlaceId;
