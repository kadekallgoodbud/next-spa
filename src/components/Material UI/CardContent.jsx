import { CardContent } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    '&:last-child': {
                        padding: "16px",
                        display: "flex",
                        gap: "20px",
                        flexDirection: "column",
                        justifyContent: "center"
                    },
                },
            }
        }
    }
})

export const CardContentMui = (props) => {
    return (
        <>
            <CardContent 
                theme={theme}
            >
                {props.children}
            </CardContent>
        </>
    )
}