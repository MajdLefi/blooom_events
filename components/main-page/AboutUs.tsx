import Image from 'next/image'
import type { GetServerSideProps } from "next";
import { Grid, Box, Container, Typography } from '@mui/material'
import CustomButton from '../buttons/CustomBtn';

export default function AboutUs() {
  return (
    <div className='bg-stone-50 h-98 w-full pb-4'>
      <Container sx={{ pt: '70px' }}>
        <Grid container>
          <Grid item xs={12} md={5} sx={{}}>
            <Box sx={{ position: 'relative', pt:'30px', width: '320px', height: '410px', ml: {xs:'0', md:'30px'}, mt: '-30px'}}>
              <Box sx={{ position: 'absolute', border: 'solid #181818 1px', width: '100%', height: '100%', ml: {xs:'0', md:'30px'}, mt: {xs:'-10px', md:'-30px'}}} />
              <Box sx={{ position: 'absolute', width: '100%',  height: '100%',  zIndex: 99,  }}>
                <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704415415/blooom%20studio/about-us_wkofrt.png" width={340} height={480} alt='aboutus-image' loading="lazy" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} sx={{mb:{xs:'0px', md:'0'}}}>
            <Typography sx={{ fontSize: '50px', fontFamily: 'Inter', fontWeight: '600', color:"black" }}>Blooom</Typography>
            <Typography sx={{ fontSize: '50px', fontFamily: 'Inter', fontWeight: '600', color:"black", mt: '-35px', ml: '30px' }}>.Studio</Typography>
            <Typography sx={{ fontSize: '25px', fontFamily: 'Inika', fontWeight: '400', mb:'30px', color:"black" }}>
              Bloooms Studio is a dynamic production and communication company dedicated to bringing creative vison to life
              Blooom Studio is more than a production company ! We are a creative hub where ideas flourish visions come to life and boundaries are pushed.
            </Typography>
            <CustomButton buttonText="More about us" />
            {/* <Button color="dark" pill className='bg-black	'>About Us</Button> */}
          </Grid>
        </Grid>
      </Container>
    </div>
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