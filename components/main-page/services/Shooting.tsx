import Image from 'next/image'
import { Grid, Box, Container, Typography } from '@mui/material'
import { Button } from 'flowbite-react';
import { Tabs } from 'flowbite-react';
import shooting11 from '../../../public/assets/imgs/shooting11.png'
import shooting12 from '../../../public/assets/imgs/shooting22.png'
import shooting13 from '../../../public/assets/imgs/shooting33.png'
import CustomBtn from '../../buttons/CustomBtn'
import CustomButton from '../../buttons/CustomBtn';
export default function Shooting() {
    return (
        <Box className='bg-stone-50 pb-4' sx={{  }}>
        <Container>
            <Grid container spacing={3} >
                <Grid item xs={12} md={5} sx={{display:{xs:'none', md:'block'} }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ mb: '30px' }}>
                                <Image src={shooting11} width={282} height={391} alt='aboutus-image' loading="lazy" />
                            </Box>
                            <Box sx={{ }}>
                                <Image src={shooting12} width={282} height={391} alt='aboutus-image' loading="lazy" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{}}>
                                <Image src={shooting13} width={198} height={550} alt='aboutus-image' loading="lazy" />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7} sx={{ mt: '30px', }}>
                    <Typography variant='h2' sx={{ mb: '30px', color:'black' }}>Prenez un rendez-vous with us !</Typography>
                    <Typography variant='h4' sx={{ mb: '30px', color:'black' }}>Prenez un rendez-vous with us ! Prenez un rendez-vous with us ! Prenez un rendez-vous with us ! Prenez un rendez-vous with us !</Typography>
                    <CustomButton buttonText='Send' />
                </Grid>
            </Grid>
        </Container>
        </Box>
    )
}
