'use client'
import Image from 'next/image'
import { Grid, Box, Container, Typography } from '@mui/material'
import { Button } from 'flowbite-react';
import { Tabs } from 'flowbite-react';
import shooting11 from '../../../public/assets/imgs/shooting11.jpeg'
import shooting12 from '../../../public/assets/imgs/shooting12.jpeg'
import shooting13 from '../../../public/assets/imgs/shooting13.jpeg'
import CustomBtn from '../../buttons/CustomBtn'
import CustomButton from '../../buttons/CustomBtn';
export default function Shooting() {
    return (
        <Container className='mb-28' sx={{ pt: '70px' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={5} >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ border: 'solid red 1px', height: '200px', mb: '30px' }}>
                                <Image src={shooting11} width={340} height={480} alt='aboutus-image' loading="lazy" />
                            </Box>
                            <Box sx={{ border: 'solid red 1px', height: '250px' }}>
                                <Image src={shooting12} width={340} height={480} alt='aboutus-image' loading="lazy" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ border: 'solid red 1px', height: '480px' }}>
                                <Image src={shooting13} width={340} height={480} alt='aboutus-image' loading="lazy" />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7} sx={{ mt: '30px' }}>
                    <Typography variant='h2' sx={{ mb: '30px' }}>Prenez un rendez-vous with us !</Typography>
                    <Typography variant='h4' sx={{ mb: '30px' }}>Prenez un rendez-vous with us ! Prenez un rendez-vous with us ! Prenez un rendez-vous with us ! Prenez un rendez-vous with us !</Typography>
                    <CustomButton buttonText='Send' />
                </Grid>
            </Grid>
        </Container>
    )
}
