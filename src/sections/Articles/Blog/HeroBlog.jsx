import { blogdata } from "@/data/data";
import React from "react";
import { Stack, Typography } from "@mui/material";

export default function BlogHero() {

  const blogprops = {
    title: (blogdata.main.title),
    descst: (blogdata.main.startDesc),
    descnd: (blogdata.main.endDesc),
  }

  return (
    <>
      <div className="container min-h-fit xs:min-h-fit">
        <Stack
          sx={{
            height: "300px"
          }}
          direction="column"
          gap={2}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography
            variant="h1"
            sx={{
              backgroundImage: 'linear-gradient(to right, var(--clr-gradient-text), var(--clr-gradient-text-secondary))',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 'normal',
              fontSize: '40px',
              '@media (max-width: 600px)': {
                fontSize: '20px',
                lineHeight: 'tight',
              },
              fontWeight: 'bold',
            }}
          >
            {blogprops.title}
          </Typography>
          <Typography
            sx={{
              color: "var(--clr-text-custom)"
            }}
            variant="subtitle1"
            fontSize={19}
            fontWeight={400}
            lineHeight="2rem"
          >
            {blogprops.descst}
          </Typography>
        </Stack>
      </div>
    </>
  )


}
