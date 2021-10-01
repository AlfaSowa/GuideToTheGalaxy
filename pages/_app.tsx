import '../styles/globals.scss';
import { AppProps } from 'next/app';
import { $pages, getPagesDataFx } from '../models/pages';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { getAccountFx } from '../models/account';

const WrappedApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	const pages = useStore($pages);

	useEffect(() => {
		if (!pages.length) {
			getPagesDataFx();
		}
	}, []);

	useEffect(() => {
		const reg = /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/;
		const token = document.cookie ? document.cookie.replace(reg, '$1') : '';

		if (token) {
			getAccountFx(token);
		}
	}, []);

	return <Component {...pageProps} />;
};

export default WrappedApp;
