import clsx from 'clsx';
import { useStore } from 'effector-react';
import Link from 'next/link';
import { $sidebarAction, toogleSidebarActionFx } from '../../models/actions';
import { $pages } from '../../models/pages';
import CustomText from '../ui/text/text.component';
import { sidebarNav } from './sidebar-data';
import styles from './sidebar.module.scss';

const Sidebar = (): JSX.Element => {
	const sidebarAction = useStore($sidebarAction);
	const pages = useStore($pages);

	return (
		<div
			className={clsx(styles.sidebar, {
				[styles.sidebar_active]: !sidebarAction,
			})}
		>
			<div className={styles.sidebar__header}>
				<button
					className={styles.sidebar__btn}
					onClick={() => toogleSidebarActionFx(!sidebarAction)}
					type='button'
				>
					{'<<<<'}
				</button>
			</div>

			<div className={styles.sidebar__content}>
				<nav className={styles.nav}>
					<ul className={styles.nav__list}>
						{pages.map((page) => (
							<li key={page._id} className={styles.nav__item}>
								<Link href={`/${page.alias}`}>
									<a
										className={clsx(styles.nav__link, {
											[styles.nav__link_expanded]: !sidebarAction,
										})}
									>
										<div className={styles.nav__icon}>
											1
										</div>
										{sidebarAction && (
											<CustomText
												className={styles.nav__text}
											>
												{page.name}
											</CustomText>
										)}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
