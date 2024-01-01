import Image from 'next/image'
import { Box, Grid, Container, Typography } from '@mui/material'
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
              <Image src={album4} width={247} height={430} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
          <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
            <Box sx={{ textAlign: 'center' }}>
              <Image src={album5} width={244} height={292} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
        </Grid>
        <Typography sx={{textAlign:'center', color:'black', fontFamily:'Satisfy cursive'}}>The artiste a peint un portrait de sa femme. The artist painted a portrait of his wife. .The artiste a peint un portrait de sa femme.</Typography>
      </Container>
    </Box>
  )
}


