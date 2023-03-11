import React, { useState } from 'react';
import useSWR from 'swr';
import { Box, Tooltip } from '@mui/material/';
import { GitHub } from '@mui/icons-material';
import { ButtonMui } from '../../components/Material UI/Button';
import { CardMui } from '../../components/Material UI/Card';
import { CardContentMui } from '../../components/Material UI/CardContent';
import { TypographyMui } from '../../components/Material UI/Typography';
import { IconButtonMui } from '../../components/Material UI/IconButton';


const fetcher = (url) => fetch(url).then((res) => res.json());

export const ProjectList = () => {
    const { data, error } = useSWR('api/staticdata', fetcher);
    const [ showCount, setShowCount ] = useState(3);

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
            <div className='grid gap-5 xs:gap-10 grid-cols-3'>
                    {
                        data && data.allProjects.slice(0, showCount).map(( item ,i ) => {
                            return (
                                <div key={i}>
                                    <Box justifyItems="center">
                                        <CardMui>
                                            <CardContentMui>
                                                <TypographyMui  
                                                    sx={{
                                                        fontSize: '25px',
                                                        fontWeight: '600',
                                                        color: 'var(--clr-secondary)',
                                                    }}
                                                    variant='h4' 
                                                    component="div">
                                                    {item.title}
                                                </TypographyMui>
                                                <TypographyMui 
                                                    sx={{
                                                        fontSize: '1rem',
                                                        color: 'var(--clr-body)',
                                                        fontWeight: 'normal',
                                                    }}
                                                    variant='body' 
                                                    component="div">
                                                    {item.desc}
                                                </TypographyMui>
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
                                                <IconButtonMui 
                                                 size="small" 
                                                 href={item.link}
                                                 rel="noreferrer" 
                                                 target="_blank">
                                                     <GitHub/>
                                                </IconButtonMui>
                                            </Tooltip>   
                                            </CardContentMui>
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
        </>
    )
}