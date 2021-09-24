import { Link } from '@material-ui/core';
import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Part } from '../../interfaces/chapters';
import { $pages } from '../../models/pages';

const ThemeList = (): JSX.Element => {
	const pages = useStore($pages);
	const router = useRouter();
	const [list, setList] = useState<any>(null);
	const [page, setPage] = useState<any>(null);

	console.log(list);

	useEffect(() => {
		if (pages.length > 0) {
			const pageData = pages.find((page) =>
				router.pathname.includes(page.alias)
			);
			setPage(pageData);

			setList(
				pageData.parts.find((part) => part.alias === router.query.part)
			);
		}
	}, [pages]);

	return (
		<div>
			{list && page && (
				<div>
					{list.themes.map((theme) => (
						<Link
							href={`/${page.alias}/${list.alias}/${theme.alias}`}
						>
							<a>{theme.name}</a>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default ThemeList;
