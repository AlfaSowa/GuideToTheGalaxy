/* eslint-disable no-useless-escape */
import '../styles/globals.scss';
import App, { AppProps } from 'next/app';
import { withHydrate } from 'effector-next';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import MobileNavigation from '../components/mobile-navigation/navigation.component';
import {
  $account,
  fetchAccountDataFx,
} from '../models/account';

const enhance = withHydrate();

const WrappedApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const account = useStore($account);

  useEffect(() => {
    const reg = /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/;
    const token = document.cookie ? document.cookie.replace(reg, '$1') : '';

    if (token && !account) {
      fetchAccountDataFx({ token });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default enhance(WrappedApp);
