import style from './image.module.scss';

interface ImageProps {
  data: string;
  alt: string;
}

const Image = ({ data, alt }: ImageProps): JSX.Element => {
  return <img className={style.img} src={data} alt={alt} />;
};

export default Image;
