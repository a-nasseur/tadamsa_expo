import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#E42313'
        },
        secondary: {
            main: '#000'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "Osande",
                    borderRadius: 0
                }
            }
        }
    }
});

// Setting the automatic responsive size on theme
theme = responsiveFontSizes(theme);

export default theme;