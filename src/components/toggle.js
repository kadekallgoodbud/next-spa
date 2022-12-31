import styled from 'styled-components';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/theme';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ToggleButton = styled.a`
        position: fixed;
        top: 5%;
        right: 2rem;

        @media (max-width: 600px) {
        position: absolute;
        top: 4%;
        right: 1.5rem;
        }
    `

export default function ButtonToggler() {
    const [{ themeName, toggleTheme }] = useContext(ThemeContext);
    const [isDarkMode,setDarkMode] = useState(false);

    //set DarkMode if it's checked 

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    }

    return(
        <>
            <ToggleButton>
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
            </ToggleButton> 
        </>
    )
}