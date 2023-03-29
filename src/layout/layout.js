import React, { useContext } from "react"
import ScrollTop from "../components/Scroll"
import { ButtonToggler } from "../components/Toggle"
import { Header } from "../sections/Header"
import Footer from '../sections/Footer'
import { ThemeContext } from "../context/theme"

export const Layout = ({children}) => {
    
    const [{themeName}] = useContext(ThemeContext);

    return (
    <>  
    <style jsx global>{`
        :root {
          --clr-bg-modal: ${themeName === 'light' ? '#FBFBFB' : '#003060'};
          --clr-headline-modal: ${themeName === 'light' ? '#0059b2' : '#F3F3F3'};
          ---clr-headline-gradient: ${themeName === 'light' ? '#0073e8' : '#F3F3F3'};
          ---clr-headline-gradient-secondary: ${themeName === 'light' ? '#025cb8' : '#b2bac2'};
          --clr-label-modal: ${themeName === 'light' ? '#0073e8' : '#F3F3F3'};
          --clr-border-label: ${themeName === 'light' ? '#CBD5E1' : '#095197'};
          --clr-input-modal: ${themeName === 'light' ? '#FBFBFB' : '#094178'};
          --clr-input-text-modal: ${themeName === 'light' ? '#003060' : '#ffffff'};
          --clr-exit-modal: ${themeName === 'light' ? '#3a4f66' : '#FFFFFF'};
          --clr-exit-bg-modal: ${themeName === 'light' ? '#CAE5FF' : '#094178'};
        }
      `}</style>
        <div className={`${themeName} app`}>
            <Header />
            <ButtonToggler />
                {children}
            <ScrollTop />
            <Footer/>
        </div>
    </>
    )
  }
  