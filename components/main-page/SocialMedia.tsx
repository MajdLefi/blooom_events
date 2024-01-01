import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'
import shooting0 from '../../public/assets/imgs/shooting0.png'
import shooting1 from '../../public/assets/imgs/shooting1.png'
import shooting2 from '../../public/assets/imgs/shooting2.png'
import shooting3 from '../../public/assets/imgs/shooting3.png'
import CustomButton from '../buttons/CustomBtn'

export default function SocialMedia() {
    return (
        <Box className='bg-stone-50 pb-20'>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={3.5} >
                        <Box sx={{ textAlign: 'center' }}>
                            <Image src={shooting0} width={320} height={410} alt='aboutus-image' loading="lazy" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8.5} sx={{}} spacing={3}>
                        <Box sx={{ pt: '20px', mb: '52px' }}>
                            <Typography variant='h2' sx={{ mb: '10px', color:'black' }}>Plan your shooting with us !</Typography>
                            <Typography variant='h5' sx={{ mb: '25px', color:'black' }}>Plan your shooting with us !</Typography>
                            <CustomButton buttonText="Start preparing" />
                        </Box>
                        <Box sx={{ display: 'flex', }}>
                            <Box sx={{ textAlign: 'center', mr: { xs: '10px', md: '40px' }, width: { xs: '320px', md: '320px' }, height: { xs: '90px', md: '220px' } }}>
                                <Image src={shooting1} width={320} height={320} alt='aboutus-image' loading="lazy" />
                            </Box>
                            <Box sx={{ textAlign: 'center', mr: { xs: '10px', md: '40px' }, width: { xs: '320px', md: '320px' }, height: { xs: '90px', md: '220px' } }}>
                                <Image src={shooting2} width={320} height={320} alt='aboutus-image' loading="lazy" />
                            </Box>
                            <Box sx={{ textAlign: 'center', width: { xs: '320px', md: '320px' }, height: { xs: '90px', md: '220px' } }}>
                                <Image src={shooting3} width={320} height={320} alt='aboutus-image' loading="lazy" />
                            </Box>
                        </Box>
                    </Grid>

                </Grid>

            </Container>
        </Box>

    )
}
