/* eslint-disable react-hooks/exhaustive-deps */
import Link from 'next/link';
import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Chapter, Part } from '../../interfaces/chapters';
import { $pages } from '../../models/pages';
import styles from './content-links.module.scss';
import Typography from '../ui/typography/typography.component';

type ListDataType = {
	alias: string;
	name: string;
};

type ListType = {
	alias: string;
	name: string;
	data: ListDataType[];
};

const ContentLinks = (): JSX.Element => {
	const pages = useStore($pages);
	const router = useRouter();
	const [page, setPage] = useState<Chapter>(null);
	const [list, setList] = useState<ListType>(null);

	const getUrl = (elem) => {
		if (router?.query?.part) {
			return `/${page.alias}/${list.alias}/${elem.alias}`;
		}
		return `/${page.alias}/${elem.alias}`;
	};

	useEffect(() => {
		if (pages.length > 0) {
			const pageData = pages.find((pagesItem) =>
				router.pathname.includes(pagesItem.alias)
			);
			setPage(pageData);

			if (router?.query?.part) {
				const part = pageData.parts.find(
					(partItem) => partItem.alias === router.query.part
				);

				setList({
					alias: part.alias,
					name: part.name,
					data: part.themes,
				});
			}

			if (!router?.query?.part) {
				setList({
					alias: pageData.alias,
					name: pageData.name,
					data: pageData.parts,
				});
			}
		}
	}, [pages]);

	return (
		<div>
			{list && page && (
				<div className={styles.list}>
					{list.data.map((item) => (
						<div className={styles.list__item}>
							<Link href={getUrl(item)} key={item.alias}>
								<a className={styles.card}>
									<div className={styles.card__inner}>
										<div className={styles.card__img}>
											<img
												src='https://via.placeholder.com/300.png/09f/fff'
												alt='1'
											/>
										</div>

										<div className={styles.card__content}>
											<Typography component='h5'>
												{item.name}
											</Typography>
											<Typography variant='subtext'>
												{item.name}
											</Typography>
										</div>
									</div>
								</a>
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ContentLinks;
