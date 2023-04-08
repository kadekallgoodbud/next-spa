import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/theme';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function ButtonToggler() {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext);
    const [isDarkMode,setDarkMode] = useState(false);

    useEffect(() => {
        // Set the body background color and transition duration based on the theme
        const body = document.body;
        body.style.backgroundColor = themeName === 'dark' ? !isDarkMode : isDarkMode;
        body.style.transitionDuration = '0.5s';
      }, [themeName]);

    //set DarkMode if it's checked 

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
        toggleTheme();
    }

    return(
        <>
            <div
            className='fixed top-[5%] right-[2rem] xs:absolute xs:top-[4%] xs:right-[1.5rem]'
            >
                <DarkModeSwitch 
                style={{
                    filter: 'drop-shadow(0px 1px 4px #FFFFFF)'
                }}
                 onClick={toggleTheme} 
                 checked={themeName === "dark" ? !isDarkMode : isDarkMode}
                 onChange={toggleDarkMode}
                 size={35}
                 moonColor='white'
                 sunColor='#f5c313'
                 />
            </div> 
        </>
    )
}