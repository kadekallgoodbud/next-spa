import React, { forwardRef } from 'react';
import { IconButton } from '@mui/material/';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    width: "35px",
                    color: "var(--clr-secondary)",
                },
            },
        },
    },
});

export const IconButtonMui = forwardRef((props, ref) => {
    return(
        <>
            <IconButton
                {...props}
                ref={ref}
                theme={theme}
                size={props.size}
                href={props.href}
                rel={props.rel}
                targert={props.targert}
            >
                <>{props.children}</>
            </IconButton>
        </>
    )
});

IconButtonMui.displayName = 'IconButtonMui';