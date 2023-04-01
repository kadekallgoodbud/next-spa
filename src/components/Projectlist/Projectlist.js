import React, { 
    useState, 
    createRef 
} from 'react';
import CircularProgress, {
    circularProgressClasses,       
    CircularProgressProps, 
} from '@mui/material/CircularProgress';
import useSWR from 'swr';
import { Stack, Box, Tooltip, Skeleton } from '@mui/material/';
import useMediaQuery from '@mui/material/useMediaQuery';
import { GitHub } from '@mui/icons-material';
import { ButtonMui } from '../../components/Material UI/Button';
import { CardMui } from '../../components/Material UI/Card';
import { CardContentMui } from '../../components/Material UI/CardContent';
import { TypographyMui } from '../../components/Material UI/Typography';
import { IconButtonMui } from '../../components/Material UI/IconButton';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProjectList() {
    const { data, error, isLoading } = useSWR('api/staticdata', fetcher);
    const [ showCount, setShowCount ] = useState(3);

    const ref = createRef();

    const handleShowMore = () => {
        setShowCount((prevCount) => prevCount + 3)
      }
  
      const handleShowLess = () => {
        setShowCount(3)
      }

    if (error) {
        return (
            <>
                <Stack
                    direction="column"
                    gap="15px"
                    justifyContent="center"
                    alignItems="center"
                >
                    <ErrorOutlineIcon 
                        sx={{
                            fill: "#f53331", 
                            width: "90px", 
                            height: "90px",
                        }}
                    />
                    <TypographyMui
                        sx={{
                            fontSize: '1.5rem',
                            color: 'var(--clr-body)',
                            fontWeight: '600',
                            textAlign: 'center',
                            '@media (max-width: 600px)': {
                                fontSize: '17px',
                            }
                        }}
                    >
                     Uh oh! We can&apos;t connect to our server right now, maybe check your internet? Try again later or hit us up for help. Sorry about that!
                    </TypographyMui>
                </Stack>
            </>
        )
    }
    if (!data || isLoading) {
        return (
            <>
               <Box sx={{ position: 'relative', margin: "0px auto"}}>
                    <CircularProgress
                      variant="determinate"
                      sx={{
                        color: (theme) =>
                          theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                      }}
                      size={40}
                      thickness={4}
                      value={100}
                    />
                    <CircularProgress
                      variant="indeterminate"
                      disableShrink
                      sx={{
                        color: (theme) => (theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'),
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                          strokeLinecap: 'round',
                        },
                      }}
                      size={40}
                      thickness={4}
                    />
                </Box>
            </>
        )
    }
    return (
        <>
            <div className='grid gap-5 xs:gap-5 grid-cols-3 xs:grid-cols-1'>
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
                                                        backgroundImage: 'var(--clr-gradient)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        '@media (max-width: 600px)': {
                                                            fontSize: '20px'
                                                        }
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
                                                        '@media (max-width: 600px)': {
                                                            fontSize: '14px',
                                                        }
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
                                                 ref={ref}
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
                                        sx={{
                                            backgroundColor: "var(--clr-border)",
                                            borderColor: "var(--clr-border)",
                                            "&:hover": {
                                                backgroundColor: 'var(--clr-link)',
                                                borderColor: 'var(--clr-link)'
                                            },
                                            '&:not(:hover)': { 
                                                backgroundColor: "var(--clr-border)",
                                                borderColor: "var(--clr-border)"
                                            },
                                        }}
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
                                        sx={{
                                            backgroundColor: "var(--clr-border)",
                                            borderColor: "var(--clr-border)",
                                            "&:hover": {
                                                backgroundColor: 'var(--clr-link)',
                                                borderColor: 'var(--clr-link)'
                                            },
                                            '&:not(:hover)': { 
                                                backgroundColor: "var(--clr-border)",
                                                borderColor: "var(--clr-border)"
                                            },
                                        }}
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