import { FC } from "react";
import style from "./styles.module.scss";

interface IImage {
  data: string;
  alt: string;
}

const Image: FC<IImage> = ({ data, alt }) => (
  <img className={style.img} src={data} alt={alt} />
);

export default Image;
