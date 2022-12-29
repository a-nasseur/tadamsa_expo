import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#E42313'
        }
    }
});

// Setting the automatic responsive size on theme
theme = responsiveFontSizes(theme);

export default theme;