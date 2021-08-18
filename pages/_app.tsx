import { theme } from '../styles/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import '../styles/globals.scss';
import { useEffect } from 'react';
import { $account, getAccountFx } from '../models/account';
import { useStore } from 'effector-react';
import { AppProps } from 'next/app';

const WrappedApp = ({ Component, pageProps }: AppProps): JSX.Element => {
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
