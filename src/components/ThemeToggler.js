import { useContext, useState } from 'react';
import { ThemeContext } from '../context/theme';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function ButtonToggler() {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext);
    const [isDarkMode,setDarkMode] = useState(false);

    //set DarkMode if it's checked 

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);s
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