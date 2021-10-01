/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import clsx from 'clsx';
import { useStore } from 'effector-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { $account } from '../../models/account';
import MiniProfileDropdown from './dropdown/dropdown.component';
import styles from './mini-profile.module.scss';

const MiniProfile = (): JSX.Element => {
	const account = useStore($account);
	const [open, setOpen] = useState(false);

	console.log(account);

	return (
		<>
			{!account && (
				<Link href='/login'>
					<a className={styles.text}>Вход</a>
				</Link>
			)}

			{account && (
				<div className={styles.containe}>
					<div
						className={styles.avatar}
						onClick={() => setOpen(!open)}
						role='button'
					>
						{account?.image?.url && (
							<img src={account.image.url} alt='' />
						)}
						<div className={styles.name}>{account.username}</div>
					</div>

					{open && <MiniProfileDropdown />}
				</div>
			)}
		</>
	);
};

export default MiniProfile;
