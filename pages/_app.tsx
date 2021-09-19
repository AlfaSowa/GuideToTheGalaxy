import '../styles/globals.scss';
import { useEffect } from 'react';
import { useStore } from 'effector-react';
import { AppProps } from 'next/app';
import {
  $account,
  getAccountFx,
} from '../models/account';

const WrappedApp = ({
  Component, pageProps,
}: AppProps): JSX.Element => {
  const account = useStore($account);

  useEffect(() => {
    if (!account) {
      (async () => {
        await getAccountFx(document.cookie);
      })();
    }
  }, [account]);

  return <Component {...pageProps} />;
};

export default WrappedApp;
