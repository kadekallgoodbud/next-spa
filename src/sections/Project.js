import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios'
import { data } from '../api/data';
import { Box, Card, Typography, CardContent, Tooltip, IconButton } from '@mui/material/';
import { GitHub } from '@mui/icons-material';

const fetcher = url => axios.get(url).then(res => res.data.allProjects)

export function Project() {
    const { data, error } = useSWR('/api/staticdata', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    console.log(data)

    return (
        <>
        <h1>{data.title}</h1>
        </>
    )


} 