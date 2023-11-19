import Image from 'next/image'
import { Box, Grid, Container, Typography } from '@mui/material'
import { Button } from 'flowbite-react';
import aboutus from '../../public/assets/imgs/aboutus.png'
export default function Album() {
  return (
    <Container className='mb-28'>
        <Grid container spacing={2} className='mb-12'>
  <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
    <Box sx={{ textAlign: 'center' }}>
      <Image src={aboutus} width={320} height={410} alt='aboutus-image' loading="lazy" />
    </Box>
  </Grid>
  <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
    <Box sx={{ textAlign: 'center' }}>
      <Image src={aboutus} width={320} height={410} alt='aboutus-image' loading="lazy" />
    </Box>
  </Grid>
  <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
    <Box sx={{ textAlign: 'center' }}>
      <Image src={aboutus} width={320} height={410} alt='aboutus-image' loading="lazy" />
    </Box>
  </Grid>
  <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
    <Box sx={{ textAlign: 'center' }}>
      <Image src={aboutus} width={320} height={410} alt='aboutus-image' loading="lazy" />
    </Box>
  </Grid>
  <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
    <Box sx={{ textAlign: 'center' }}>
      <Image src={aboutus} width={320} height={410} alt='aboutus-image' loading="lazy" />
    </Box>
  </Grid>
</Grid>


      {/* <Box>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ border: 'solid red 1px', textAlign: 'center',position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ backgroundColor: '#FFEFCD', width: '335px', height:'100%'  }}>
              <Box sx={{ position: 'absolute', left: '145px', top: '25px', textAlign: 'center' }}>
                <Image src={aboutus} width={310} height={500} alt='aboutus-image' loading="lazy" />
              </Box>
            </Box>
            <Box>
              <Image src={aboutus} width={350} height={510} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ border: 'solid red 1px', pt:'50px' }}>
            <Box>
              <Typography sx={{ fontSize: '50px', fontFamily: 'Inter', fontWeight: '900' }}>Get your Dream Portrait</Typography>
              <Typography sx={{ fontSize: '25px', fontFamily: 'Inika', mb:'40px' }}>L'artiste a peint un portrait de sa femme. The artist painted a portrait of his wife. La ville a commandé <br /> un portrait de son plus célèbre citoyen. The city commissioned a portrait of its most famous citizen.</Typography>
            </Box>
            <Button color="dark" pill className='bg-black	'>About Us</Button>
          </Grid>
        </Grid>
      </Box> */}

    </Container>

  )
}
