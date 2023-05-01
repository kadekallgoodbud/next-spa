import React, { useState, useEffect } from "react"
import { Box, Stack, Paper, Divider, Grid } from "@mui/material"
import ListCard from "@/components/Blog/Card/ListCard";
import BoxCard from "@/components/Blog/Card/BoxCard";


export default function ListBlog(props) {
  const post = props.data_post
  const [viewType, setViewType] = useState('box');

  const ShapeBoxBtn = ({ onClick }) => {
    const shape = {
      borderRadius: "3px",
      width: 18,
      height: 12,
      display: "inline-block",
      background: "var(--clr-gradient-text-secondary)",
      opacity: viewType === "box" ? "0.8" : "0.3",
    }
    const itemstack = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }
    const rectangle = <Box component="span" sx={shape} />;
    return (
      <>
        <Box
          sx={{
            cursor: "pointer",
            width: 40,
            height: 10,
          }}
          onClick={onClick}
        >
          <Grid container spacing={0.5}>
            <Grid item xs={6} sx={itemstack}>
              {rectangle}
            </Grid>
            <Grid item xs={6} sx={itemstack}>
              {rectangle}
            </Grid>
            <Grid item xs={6} sx={itemstack}>
              {rectangle}
            </Grid >
            <Grid item xs={6} sx={itemstack} >
              {rectangle}
            </Grid >
          </Grid >
        </Box >
      </>
    )
  }

  const ShapeListBtn = ({ onClick }) => {
    const shape = {
      borderRadius: "3px",
      width: 30,
      height: 12,
      display: "inline-block",
      background: "var(--clr-gradient-text-secondary)",
      opacity: viewType === "list" ? "0.8" : "0.3",
    }
    const rectangle = <Box component="span" sx={shape} />;
    return (
      <>
        <Box
          sx={{
            cursor: "pointer",
            width: 55,
            height: 10,
          }}
          onClick={onClick}
        >
          <Stack
            direction="column"
            gap={0.5}
          >
            {rectangle}
            {rectangle}
          </Stack>
        </Box>
      </>
    )
  }

  return (
    <>
      <div className="container min-h-fit xs:min-h-fit">

        <Box>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={1}
          >
            <ShapeBoxBtn onClick={() => setViewType('box')} />
            <ShapeListBtn onClick={() => setViewType('list')} />
          </Stack>
        </Box>

        <Box
          marginTop={4}
        >
          <Divider sx={{ borderColor: "#1a3d61" }} />
          <Paper elevation={0} sx={{ width: "250px", margin: "20px 0", background: "transparent" }}>
            {
              post.map((val) => {
                return (
                  <>
                    <ListCard key={val._id} data_post={val} />
                  </>
                )
              })
            }
          </Paper>
        </Box>
      </div >
    </>
  )

}
