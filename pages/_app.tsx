import { theme } from '../styles/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
