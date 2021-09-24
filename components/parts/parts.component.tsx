import { Link } from '@material-ui/core';
import { useStore } from 'effector-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Chapter } from '../../interfaces/chapters';
import { $pages } from '../../models/pages';

const PartsList = (): JSX.Element => {
	const pages = useStore($pages);
	const router = useRouter();
	const [list, setList] = useState<any>(null);

	useEffect(() => {
		if (pages.length > 0) {
			setList(pages.find((page) => router.pathname.includes(page.alias)));
		}
	}, [pages]);

	return (
		<div>
			{list && (
				<div>
					{list.parts.map((part) => (
						<Link href={`/${list.alias}/${part.alias}`}>
							<a>{part.name}</a>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default PartsList;
