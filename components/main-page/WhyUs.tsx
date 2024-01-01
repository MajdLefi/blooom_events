import { Box, Container, Grid, Typography } from '@mui/material'
import { Button } from 'flowbite-react';
import Image from 'next/image'
import whyus from '../../public/assets/imgs/whyus.png'
export default function WhyUs() {
  return (
    <Box sx={{backgroundColor:'#ECE5DC', pt:'50px'}}>
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} md={6} sx={{mb:'50px'}}>
          <Container sx={{mt:'20px', pt:'50px'}}>
            <Typography variant='h2' sx={{mb:'20px', color:'black',}}>Why Blooom Studio?</Typography>
            <Typography variant='h4' sx={{mb:'20px', color:'black', fontWeight:'bold'}}>Profiter des packs, <br />qualité et prix exceptionnel</Typography>
            <Typography sx={{mb:'20px', color:'black'}}> Profiter des packs, qualité et prix exceptionnel qualité et prix exceptionnelProfiter des packs, qualité et prix exceptionnel qualité et prix exceptionnelProfiter des packs, qualité et prix exceptionnel qualité et prix exceptionnel</Typography>
            <Button color="dark" pill className='bg-black'>About Us</Button>
          </Container>
         
        </Grid>
        <Grid xs={12} md={6}>
          <Box sx={{textAlign:'center', m:'0 auto 0 auto'}}>
            <Image src={whyus} width={600} height={300} alt='aboutus-image' loading="lazy" />
          </Box>
        </Grid>
      </Grid>
    </Container>
    </Box>
  )
}
