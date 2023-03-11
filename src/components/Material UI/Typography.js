import { Typography } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const TypographyMui = (props) => {
    return(
        <>
            <Typography 
                sx={props.sx}
                variant={props.variant}
                component={props.component}>
                    {props.children}
            </Typography>
        </>
    )
}