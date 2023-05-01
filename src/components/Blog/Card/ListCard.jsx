import React from "react"
import { Box, Stack, Link, Typography, Grid } from "@mui/material"
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const ListCard = (props) => {

  const post = props.data_post

  const createdAt = new Date(Date.parse(post._createdAt)).toLocaleDateString(
    undefined,
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
  //const truncateString = ({ string }) => string.split(' ').length > 30 ? string.split(' ').slice(0, 30).join(' ') + '...' : string;

  //const truncatedString = truncateString({ string: post.body.children.text });
  const gridstyleSt = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }

  const gridstyleNd = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }

  const categoryHashMap = new Map();
  post.categories.forEach((category) => { categoryHashMap.set(category.slug.current, category.title); })

  return (
    <>
      <Box>
        <Stack
          direction="column"
          gap={2}
        >
          <Grid container spacing={1} direction="row">
            <Grid item sx={gridstyleSt} xs={5}>
              <Typography fontSize={15} fontWeight={400} lineHeight="20px" sx={{ color: "var(--clr-body)" }}>
                {createdAt}
              </Typography>
            </Grid>
            <Grid item sx={gridstyleNd} xs={6}>
              {Array.from(categoryHashMap).map(([slug, title]) => (
                <Link href={`/articles/blog/category/${slug}`}>
                  <Typography fontSize={15} fontWeight={500} lineHeight="20px" sx={{ padding: "8px 15px", background: "red", color: "var(--clr-body)", textTransform: "capitalize" }}>
                    {title}
                  </Typography>
                </Link>
              ))}
            </Grid>
          </Grid>
          <Link href={`/articles/blog/${post.slug.current}`}>
            <Typography sx={{ color: "var(--clr-body)" }} fontSize={20} lineHeight="22px" fontWeight={600}>
              {post.title}
            </Typography>
          </Link>
        </Stack>
      </Box>
    </>
  )

}

export default ListCard;
