import Image from 'next/image'
import { Box, Grid, Container, Typography } from '@mui/material'
import { Button } from 'flowbite-react';
import album1 from '../../public/assets/imgs/album1.png'
import album2 from '../../public/assets/imgs/album2.png'
import album3 from '../../public/assets/imgs/album3.png'
import album4 from '../../public/assets/imgs/album4.png'
import album5 from '../../public/assets/imgs/album5.png'
export default function Album() {
  return (
    <Box className='bg-stone-50 pb-16'>
      <Container className=''>
        <Grid container spacing={2} sx={{ pt: '30px' }} className='mb-12'>
          <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
            <Box sx={{ textAlign: 'center' }}>
              <Image src={album1} width={249} height={292} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
          <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
            <Box sx={{ textAlign: 'center' }}>
              <Image src={album2} width={247} height={292} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
          <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
            <Box sx={{ textAlign: 'center' }}>
              <Image src={album3} width={247} height={292} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
          <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
            <Box sx={{ textAlign: 'center' }}>
              <Image src={album4} width={320} height={430} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
          <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
            <Box sx={{ textAlign: 'center' }}>
              <Image src={album5} width={244} height={292} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
        </Grid>
        <Typography sx={{textAlign:'center'}}>L'artiste a peint un portrait de sa femme. The artist painted a portrait of his wife. .L'artiste a peint un portrait de sa femme.</Typography>
      </Container>
    </Box>
  )
}

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
