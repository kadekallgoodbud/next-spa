import {Card} from '@mui/material';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    height: "250px",
                    backgroundColor: "var(--clr-primary)",
                    borderRadius: "10px",
                    borderColor: "var(--clr-border-card)",
                    '&:hover': {
                        background: "var(--clr-gradient-hover)",
                        boxShadow: "0 0 15px 1px rgba(0,0,0,0.18)"
                    },
                },
            },
        },
    },
})


export const CardMui = (props) => {
    return (
        <>
            <Card theme={theme} >
                {props.children}
            </Card>
        </>
    )
}