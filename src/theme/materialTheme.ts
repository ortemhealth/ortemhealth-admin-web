import { createTheme } from '@mui/material/styles';

const materialTheme = createTheme({
  palette: {
    primary: { main: '#23289D' },
    secondary: { main: '#00A896' },
    background: { default: '#F7F7FA' },
  },
  typography: {
    fontFamily: ['Montserrat', 'Arial', 'sans-serif'].join(','),
  },
});

export default materialTheme;

