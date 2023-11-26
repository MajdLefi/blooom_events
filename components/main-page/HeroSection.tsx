import { Box, Button, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import herosection from '../../public/assets/imgs/herosection.png'

export default function HeroSection() {
  return (
    <Box sx={{ backgroundColor: '#181818' }} className='h-auto w-full'>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} sx={{mb:{xs:'50px'}}}>
            <Typography sx={{pt: '60px', color: 'white', fontSize: '55px', mb: '20px' }}>
              Meet our Creative Team in Capturing your imagination
            </Typography>
            <Button variant="contained" 
            sx={{'&:hover': {backgroundColor: 'white', color: 'black',},
             width: '180px', height: '50px', fontSize: '18px', fontWeight: 'bold',
              textTransform: 'capitalize', borderRadius: 0,
              backgroundColor: 'white', color: 'black'
            }}>Explore</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Image src={herosection} width={662} height={509} alt='aboutus-image' loading="lazy" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
