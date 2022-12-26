import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/system";

const styleButton = createTheme({
    components : {
        MuiButton : {
            styledOverrides : {
                root : {
                    borderColor: "blue",
                    borderRadius: "25px",
                    backgroundColor: "blue",
                    color: "#F3F3F3",
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



export function Buttons(){
    return(
        <>
            <Button theme={styleButton}></Button>
        </>
    )
}