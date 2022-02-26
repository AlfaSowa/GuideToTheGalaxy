/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import "../styles/globals.scss";
import App, { AppContext, AppProps } from "next/app";
import { withHydrate } from "effector-next";
import { useEffect } from "react";
import MobileNavigationBottom from "../components/mobile/navigation/bottom/mobile-navigation-bottom.component";
import { getCookie } from "../methods/cookies";
import { useAccount } from "../hooks/account/useAccount";
import { setTokenFx } from "../models/account/token";

const enhance = withHydrate();

function WrappedApp({ Component, pageProps }: AppProps) {
  const { account, token, fetchAccountData } = useAccount();

  useEffect(() => {
    if (token && !account) {
      fetchAccountData(token);
    }
  }, [account, fetchAccountData, token]);

  return (
    <>
      <Component {...pageProps} />
      {pageProps?.isMobile && <MobileNavigationBottom />}
    </>
  );
}

WrappedApp.getInitialProps = async (appContext: AppContext) => {
  const userAgent = appContext?.ctx?.req?.headers["user-agent"];

  const reqMobile =
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

  const cookies = appContext?.ctx?.req?.headers?.cookie || null;

  if (cookies && getCookie("token", cookies)) {
    setTokenFx(getCookie("token", cookies));
  } else {
    setTokenFx(null);
  }

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
