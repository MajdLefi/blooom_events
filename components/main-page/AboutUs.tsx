import { Grid,Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <div className='bg-slate-300 h-98 w-full'>
        <Container>
        <Grid container>
        <Grid item xs={12} md={7}>
        <Typography>Photographer</Typography>
        <Typography>Blooom.Studio</Typography>
        <Typography>Blooom.Studio</Typography>
        <button>About-us</button>
        </Grid>
        <Grid item xs={12} md={5} sx={{border:'solid red 1px'}}> 
            <Image src='/assets/imgs/herosection/caroussel1.png' width={320} height={410} alt='aboutus-image' loading="lazy"/>
        </Grid>
        </Grid>
        </Container>
    </div>
  )
}
