/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import "../styles/globals.scss";
import App, { AppContext, AppProps } from "next/app";
import MobileNavigationBottom from "../components/mobile/navigation/bottom/mobile-navigation-bottom";
import { getCookie } from "../methods/cookies";

function WrappedApp({ Component, pageProps }: AppProps) {
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

  if (typeof window === "undefined") {
    const cookies = appContext?.ctx?.req?.headers?.cookie || null;

    if (cookies && getCookie("token", cookies)) {
      // записать токен из кук
    } else {
      // токен null
    }
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

export default WrappedApp;
