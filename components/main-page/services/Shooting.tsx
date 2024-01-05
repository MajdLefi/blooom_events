import Image from 'next/image'
import { Grid, Box, Container, Typography } from '@mui/material'
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
                                <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704416281/blooom%20studio/shooting2_jf8qyk.png" width={282} height={391} alt='aboutus-image' loading="lazy" />
                            </Box>
                            <Box sx={{ }}>
                                <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704416281/blooom%20studio/shooting3_ku2prj.png" width={282} height={391} alt='aboutus-image' loading="lazy" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{}}>
                                <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704416281/blooom%20studio/shooting1_qmjbhv.png" width={198} height={550} alt='aboutus-image' loading="lazy" />
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
