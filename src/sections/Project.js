import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { data } from '../data/data';
import { createTheme } from '@mui/material/styles';
import { Box, Card, Typography, CardContent, Tooltip, IconButton } from '@mui/material/';
import { DataArrayOutlined, GitHub } from '@mui/icons-material';

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

const CardStyle = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "var(--clr-primary)",
                    borderRadius: "15px",
                    borderColor: "var(--clr-border-card)",
                    '&:hover': {
                        background: "var(--clr-gradient)",
                        boxShadow: "0 0 15px 1px rgba(0,0,0,0.18)"
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
            <div className='container w-3/5 mx-auto'>
                <MyProject pdata={pval} />
                <div className='grid gap-5 xs:gap-10 grid-cols-3'>
                    {
                        data && data.allProjects.slice(0, showCount).map(( item ,i ) => {
                            return (
                                <div key={i}>
                                    <Box justifyItems="center">
                                        <Card variant='outlined' theme={CardStyle}>
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
                                                            className='text-[color:var(--clr-body)] text-sm font-medium'>
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
                                        </Card>
                                    </Box> 
                                </div>   
                            )    
                        })
                    }
                </div>
            </div>
            {
                data && showCount < data.allProjects.length && (
                    <button 
                        onClick={handleShowMore}>
                            Load More
                    </button>
                )
            }
            {
                showCount > 3 && (
                    <button 
                        onClick={handleShowLess}>
                            Load Less
                    </button>
                )
            }
        </>
    )


} 