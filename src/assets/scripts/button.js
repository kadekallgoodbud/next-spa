import { Button } from "@mui/material";
import { ThemeProvider,createTheme } from '@mui/material/styles';

export const btnHero = createTheme({
    components : {
        MuiButton : {
            styleOverrides : {
                root : {
                    borderColor: "#000000",
                    borderRadius: "25px",
                    backgroundColor: "#000000",
                    color: "#000000",
                    borderWidth: 2,
                    padding: "5px 35px",
                    textTransform: "capitalize",
                    fontSize: "20px",
                    fontWeight: 500,
                    '&:hover': {
                        backgroundColor: "red",
                        borderWidth: 2,
                        borderColor: "red",
                        color: "#F3F3F3"
                    }
                },
            }
        }
    }
})
