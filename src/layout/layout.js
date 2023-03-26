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
          --bg-color: ${themeName === 'light' ? '#f6f8fa' : '#222'};
          --text-color: ${themeName === 'light' ? '#222' : '#f6f8fa'};
          --link-color: ${themeName === 'light' ? '#1a0dab' : '#5e8dd5'};
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
  