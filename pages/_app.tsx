/* eslint-disable no-useless-escape */
import "../styles/globals.scss";
import App, { AppProps } from "next/app";
import { withHydrate } from "effector-next";
import { useEffect } from "react";
import { fetchAccountDataFx } from "../models/account";
import MobileNavigationBottom from "../components/mobile/navigation/bottom/mobile-navigation-bottom.component";
import { getCookie } from "../methods/cookies";
import { useAccount } from "../hooks/account/useAccount";
import { $token, setTokenFx } from "../models/account/token";
import { useStore } from "effector-react";

const enhance = withHydrate();

const WrappedApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { account, token } = useAccount();

  console.log("token", token);
  useEffect(() => {
    if (token && !account) {
      fetchAccountDataFx({ token });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {pageProps?.isMobile && <MobileNavigationBottom />}
    </>
  );
};

WrappedApp.getInitialProps = async (appContext) => {
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
