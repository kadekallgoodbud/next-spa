import React, { useContext } from "react"
import ScrollTop from "../components/Scroll"
import { ButtonToggler } from "../components/Toggle"
import { Header } from "../sections/Header"
import { ThemeContext } from "../context/theme"

export const Layout = ({children}) => {
    
    const [{themeName}] = useContext(ThemeContext);

    return (
    <>
        <div className={`${themeName} app`}>
            <Header />
            <ButtonToggler />
                {children}
            <ScrollTop />
        </div>
    </>
    )
  }
  