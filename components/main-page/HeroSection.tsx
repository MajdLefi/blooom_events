import type { GetServerSideProps } from "next";
import { Box, Button, Container,CardMedia, Grid, Typography } from '@mui/material'

export default function HeroSection() {
  return (
    <Box sx={{ backgroundColor: '#181818' }} className='h-auto w-full'>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} sx={{mb:{xs:'50px'}}}>
            <Typography sx={{pt: '80px', color: 'white', fontSize: '55px', mb: '20px',  }}>Where Creativity Blooms into Reality !</Typography>
            <Button variant="contained"  sx={{'&:hover': {backgroundColor: 'white', color: 'black',}, width: '180px', height: '50px', fontSize: '18px', fontWeight: 'bold',
              textTransform: 'capitalize', borderRadius: 0,
              backgroundColor: 'white', color: 'black'
            }}>Explore</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
            component='video'
            image={"https://res.cloudinary.com/dtp3jjqrq/video/upload/v1704300565/blooom%20studio/herosection_koszdv.mp4"}
            autoPlay
            muted
            loop
            sx={{ pt:'50px',pb:'40px'
          }}
        />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // add Cache-Control HTTP Header to response
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {
    },
  };
};
