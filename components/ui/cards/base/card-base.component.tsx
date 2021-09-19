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

	const onClickCard = () => {
		router.push(`/places/${id}`);
	};
	return (
		<div className={style.card}>
			<div className={style.content}>
				<div className={style.img}>
					<img src='https://via.placeholder.com/150x150' alt='123' />
				</div>

				<div className={style.text}>
					<span>
						text text textext text textext text textext text textext
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
