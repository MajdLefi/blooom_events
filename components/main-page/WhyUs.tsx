import { Box, Container, Grid, Typography } from '@mui/material'
import { Button } from 'flowbite-react';
import Image from 'next/image'
import whyus from '../../public/assets/imgs/whyus.png'
export default function WhyUs() {
  return (
    <Box sx={{backgroundColor:'#ECE5DC', pt:'50px'}}>
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Box sx={{mt:'20px'}}>
            <Typography variant='h2' sx={{mb:'50px'}}>Why Blooom Studio !</Typography>
            <Typography variant='h4' sx={{mb:'50px', fontWeight:'bold'}}>Profiter des packs, <br />qualité et prix exceptionnel</Typography>
            <Typography sx={{mb:'50px'}}> Profiter des packs, qualité et prix exceptionnel qualité et prix exceptionnelProfiter des packs, qualité et prix exceptionnel qualité et prix exceptionnelProfiter des packs, qualité et prix exceptionnel qualité et prix exceptionnel</Typography>
          </Box>
          <Button color="dark" pill className='bg-black'>About Us</Button>
        </Grid>
        <Grid xs={12} md={6}>
          <Box>
            <Image src={whyus} width={520} height={410} alt='aboutus-image' loading="lazy" />
          </Box>
        </Grid>
      </Grid>
    </Container>
    </Box>
  )
}
