import Image from 'next/image'
import { Box, Grid, Container, Typography } from '@mui/material'
export default function Album() {
  return (
    <Box className='bg-stone-50 pb-16'>
      <Container className=''>
        <Grid container spacing={2} sx={{ pt: '30px' }} className='mb-12'>
          <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
            <Box sx={{ textAlign: 'center' }}>
              <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704415464/blooom%20studio/album1_yh6jsc.png" width={249} height={292} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
          <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
            <Box sx={{ textAlign: 'center' }}>
              <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704415464/blooom%20studio/album2_x4w9yz.png" width={247} height={292} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
          <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
            <Box sx={{ textAlign: 'center' }}>
              <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704415464/blooom%20studio/album3_bgf3rd.png" width={247} height={292} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
          <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
            <Box sx={{ textAlign: 'center' }}>
              <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704415464/blooom%20studio/album4_oqub8y.png" width={247} height={430} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
          <Grid item xs={12} md={2.4} className='flex justify-center items-center'>
            <Box sx={{ textAlign: 'center' }}>
              <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704415463/blooom%20studio/album5_tdebo2.png" width={244} height={292} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
        </Grid>
        <Typography sx={{textAlign:'center', color:'black', fontFamily:'Satisfy cursive'}}>The artiste a peint un portrait de sa femme. The artist painted a portrait of his wife. .The artiste a peint un portrait de sa femme.</Typography>
      </Container>
    </Box>
  )
}


