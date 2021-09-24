import '../styles/globals.scss';
import { AppProps } from 'next/app';
import { $pages, getPagesDataFx } from '../models/pages';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

const WrappedApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	const pages = useStore($pages);

	useEffect(() => {
		if (!pages.length) {
			getPagesDataFx();
		}
	}, []);

	return <Component {...pageProps} />;
};

export default WrappedApp;
