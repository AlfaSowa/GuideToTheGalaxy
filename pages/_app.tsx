import '../styles/globals.scss';
import { AppProps } from 'next/app';

const WrappedApp = ({
  Component, pageProps,
}: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default WrappedApp;
