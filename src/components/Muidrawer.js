import * as React from 'react'
import { Link } from "react-scroll"
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import { ThemeContext } from '../context/theme';
import useMediaQuery from '@mui/material/useMediaQuery'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'


export default function DrawerSidebar() {
  const [{ themeName, toggleTheme }] = React.useContext(ThemeContext);

  const themeColor = createTheme ({
    pallete: {
      mode: 'dark',
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        light: '#ffffff'
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: 'red',
        main: 'yellow',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
    },
  })

  const PaperTheme = createTheme ({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            background: "theme.pallete.primary.main",
            width: "230px"
          })
        }
      }
    }
  })

  const DrawerTheme = createTheme ({
    components: {
      MuiDrawer: {
        styleOverrides : {
          root: {
            background: "var(--clr-primary)"
          }
        }
      }
    }
  })

  const [state, setState] = React.useState({
    isOpen: false
  });
    
  const DrawerToggler = (setOpen, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [setOpen]: open });
  };
  
  const InsideDrawer = (setOpen) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
    <>
      <Button onClick={DrawerToggler(setOpen, false)}>
        <CloseIcon/>
      </Button>
    {
      isMobile ? (
      <> 
          <Link to="section1" spy={true} onClick={DrawerToggler(setOpen, false)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
            About
          </Link>
          <Link to="section2" spy={true} onClick={DrawerToggler(setOpen, false)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
            Portfolio
          </Link>
          <Link to="section3" spy={true} onClick={DrawerToggler(setOpen, false)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
            Education
          </Link>
          <Link to="section4" spy={true} onClick={DrawerToggler(setOpen, false)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
            Project
          </Link>
          <Link to="section5" spy={true} onClick={DrawerToggler(setOpen, false)} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
            Contact
          </Link>
      </>
      ) : (
      <>
          <Link to="section1" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
            About
          </Link>
          <Link to="section2" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
            Portfolio
          </Link>
          <Link to="section3" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
            Education
          </Link>
          <Link to="section4" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
            Project
          </Link>
          <Link to="section5" spy={true} smooth={true} duration={500} className="cursor-pointer text-3xl text-[color:var(--clr-secondary)] hover:text-[color:var(--clr-link)] transition-transform duration-200 ease-in-out hover:scale-105 font-inter-bold tracking-wider flex align-center justify-center my-4">
            Contact
          </Link>
      </>
      )
    }
    </>
              
  );
  }

  return (
    <div>
      {['isOpen'].map((setOpen) => (
        <React.Fragment key={setOpen}>
          <ThemeProvider theme={themeColor}>
          <CssBaseline/>
            <SwipeableDrawer
              PaperProps={{
                sx:(theme) => ({ backgroundColor: theme.pallete.mode, width: "280px"})
              }}
              open={state[setOpen]}
              onClose={DrawerToggler(setOpen, false)}
              onOpen={DrawerToggler(setOpen, true)}
            >
              {InsideDrawer(setOpen)}
            </SwipeableDrawer>
          </ThemeProvider>
          <Button onClick={DrawerToggler(setOpen, true)}>
            <MenuIcon/>
          </Button>


        </React.Fragment>
      ))}
    </div>
  );
}
