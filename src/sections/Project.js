import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { data } from '../data/data';
import { createTheme } from '@mui/material/styles';
import { Box, Typography, CardContent, Tooltip, IconButton } from '@mui/material/';
import { GitHub } from '@mui/icons-material';
import { ButtonMui } from '../components/Material UI/Button';
import { CardMui } from '../components/Material UI/Card';

const TypoHeading = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                h4: {
                    color: "var(--clr-secondary)",
                    fontSize: "24px",
                    lineHeight: "32px",
                    fontWeight: 600,
                },
            },
        },
    },
});

const CardContet = createTheme({
    components: {
        MuiCardContent: {
            styleOverrides: {
                root: {
                    '&:last-child': {
                        padding: "16px",
                        display: "flex",
                        gap: "20px",
                        flexDirection: "column",
                        justifyContent: "center"
                    },
                },
            },
        },
    },
});


const CardButton = createTheme({
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


const pval = (data.project.title)

function MyProject ({pdata}) {
    return(
            <>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal" >{pdata}</h1>
            </>
        )
} 

const fetcher = (url) => fetch(url).then((res) => res.json());

export function Project() {   
    const { data, error } = useSWR('/api/staticdata', fetcher);
    const [showCount, setShowCount] = useState(3)

    const handleShowMore = () => {
      setShowCount((prevCount) => prevCount + 3)
    }

    const handleShowLess = () => {
      setShowCount(3)
    }
    
    if (error) {
        return (
            <>
                <span>Data Failed To Load</span>
            </>
        )
    }
    if (!data) {
        return (
            <>
                <span>Loading</span>
            </>
        )
    }

    return (
        <>  
            <div className='container w-3/5 mx-auto flex flex-col gap-5 py-3'>
                <MyProject pdata={pval} />
                <div className='grid gap-5 xs:gap-10 grid-cols-3'>
                    {
                        data && data.allProjects.slice(0, showCount).map(( item ,i ) => {
                            return (
                                <div key={i}>
                                    <Box justifyItems="center">
                                        <CardMui>
                                            <CardContent theme={CardContet}>
                                                <Typography  
                                                    theme={TypoHeading} 
                                                    variant='h4' 
                                                    component="div">
                                                    {item.title}
                                                </Typography>
                                                <Typography 
                                                    /* theme={TypoDescription} */
                                                    className='text-base text-[color:var(--clr-body)] font-normal' 
                                                    variant='body' 
                                                    component="div">
                                                    {item.desc}
                                                </Typography>
                                                <ul className='flex flex-row gap-2'>       
                                                {
                                                item.stack.map(( stack, i ) => {
                                                    return(
                                                        <li 
                                                            key={i} 
                                                            className='text-[color:var(--clr-text-custom)] text-sm font-medium'>
                                                            {stack}
                                                        </li>    
                                                    )    
                                                })
                                                }         
                                                </ul> 
                                            <Tooltip title="See Project" placement='right-start'>
                                                <IconButton 
                                                 theme={CardButton}  
                                                 size="small" 
                                                 href={item.link}
                                                 rel="noreferrer" 
                                                 target="_blank">
                                                     <GitHub/>
                                                </IconButton>
                                            </Tooltip>   
                                            </CardContent>
                                        </CardMui>
                                    </Box> 
                                </div>   
                            )    
                        })
                    }
                </div>
                <div
                    className='relative'>
                    {
                        data && showCount < data.allProjects.length && (
                            <div
                                className='flex item-center justify-center inset-x-0 bg-gradient-to-t from-white pt-32 pb-5 dark:from-[#001E3C] absolute bottom-[-45px]'>
                                    <ButtonMui 
                                        onClick={handleShowMore}>
                                            Load More
                                    </ButtonMui>
                            </div>
                        )
                    }
                    {
                        showCount > 3 && (
                            <div
                                className='flex item-center justify-center py-5'>
                                    <ButtonMui
                                        onClick={handleShowLess}>
                                            Load Less
                                    </ButtonMui>
                            </div>

                        )
                    }
                </div>
            </div>
            
        </>
    )


} 