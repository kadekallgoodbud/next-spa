import React, { useContext } from "react"
import ScrollTop from "../components/Scroll"
import { ButtonToggler } from "../components/Toggle"
import { Header } from "../sections/Header"
import { ThemeContext } from "../context/theme"

export const Layout = ({children}) => {
    
    const [{themeName}] = useContext(ThemeContext);

    return (
    <>  
    <style jsx global>{`
        :root {
          --clr-bg-modal: ${themeName === 'light' ? '#CAE5FF' : '#003060'};
          --clr-headline-modal: ${themeName === 'light' ? 'linear-gradient(to right bottom, #007fff, #0059b2 120%)' : '#F3F3F3'};
          --clr-label-modal: ${themeName === 'light' ? '#0652A0' : '#F3F3F3'};
        }
      `}</style>
        <div className={`${themeName} app`}>
            <Header />
            <ButtonToggler />
                {children}
            <ScrollTop />
        </div>
    </>
    )
  }
  