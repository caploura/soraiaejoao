import '../styles/globals.css';
// import Navigation from '../components/navigation/navigation';
import Menu from '../components/menu/menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#a47148',
    },
  },
  typography: {
    "fontFamily": `'Proxima Nova', Arial, Helvetica, sans-serif;`,
   }
});

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Menu />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
