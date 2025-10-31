import { ThemeProvider } from '@mui/material/styles';
import materialTheme from '../theme/materialTheme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={materialTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

