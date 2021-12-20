/* eslint-disable no-useless-escape */
import '../styles/globals.scss';
import App, { AppProps } from 'next/app';
import {
  useEffect,
} from 'react';
import { getAccountFx } from '../models/account';
import MobileNavigation from '../components/mobile-navigation/navigation.component';

const WrappedApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // useEffect(() => {
  //   const reg = /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/;
  //   const token = document.cookie ? document.cookie.replace(reg, '$1') : '';

  //   if (token) {
  //     getAccountFx({ token });
  //   }
  // }, []);

  return (
    <>
      <Component {...pageProps} />
      {pageProps?.isMobile && <MobileNavigation />}
    </>
  );
};

WrappedApp.getInitialProps = async (appContext) => {
  const userAgent = appContext?.ctx?.req?.headers['user-agent'];
  const reqMobile = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      isMobile: !!reqMobile.exec(userAgent),
    },
  };
};

export default WrappedApp;
