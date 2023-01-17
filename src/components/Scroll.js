import { useState, useEffect } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { createTheme } from '@mui/material/styles'

export default function ScrollTop() {
    const [isVisible, setVisible] = useState(false)

    const theme = createTheme({
        components: {
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        color: '#FFFFFF',
                        borderRadius: '24px',
                        background: 'var(--clr-border)',
                        padding: '5px',
                        fontSize: 40,
                        transition: 'transform ease-in-out',
                        transitionDuration: '350ms',

                        '&:hover':{
                            transform: 'scale(1.1)'
                        }
                        
                    },
                },
            },
        },
    });
    

    const scrollEffect = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    useEffect(()=> {
        const toggleVisibility = () => {
            if(window.pageYOffset > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll',toggleVisibility)
    },[])

    return(
        <div className="fixed bottom-[2rem] xs:bottom-[20px] xs:right-[15px] right-[2rem]">
            {isVisible && (
            <div onClick={scrollEffect} className="cursor-pointer opacity-100 hover:opacity-100"> 
                <ArrowUpwardIcon theme={theme}/>
            </div>
            )}
        </div>
    )

}