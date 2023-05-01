import React, { useEffect, useState, useMemo, useCallback } from "react"
import { Box, Stack, Container, Typography, CircularProgerss, Paper, Grid } from "@mui/material"
import axios from "axios"
import useSWR from "swr"


const BoxCard = () => {

  const [isLoaded, setLoaded] = useState(false)


  return (
    <>
      <Box>
        <Container>
          This is blog card post
        </Container>
      </Box>
    </>
  )

}

export default BoxCard;
