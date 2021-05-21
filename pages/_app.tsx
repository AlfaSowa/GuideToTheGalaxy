import { theme } from '../styles/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import '../styles/globals.scss';
import { useScope } from '../models/useScope';
import { app } from '../models/model';
import { Provider } from 'effector-react/ssr';
import { $places } from '../models/places';

function MyApp({ Component, pageProps }) {
  const scope = useScope(app, pageProps.initialState);

  return (
    <ThemeProvider theme={theme}>
      <Provider value={scope}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
