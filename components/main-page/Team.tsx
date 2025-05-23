import Image from 'next/image'
import { Grid, Box, Container, Typography } from '@mui/material'
import CustomButton from '../buttons/CustomBtn';

export default function Team() {
    return (
        <Box sx={{ backgroundColor: '#ECE5DC' }} className='h-98 w-full'>
            <Container sx={{ pt: '70px' }}>
                <Grid container>
                    <Grid item xs={12} md={5} >
                        <Box sx={{ position: 'relative', pt: '30px', width: '320px', height: '410px', ml: '20px', mt: '-30px' }}>
                            <Box sx={{ position: 'absolute', border: 'solid #181818 1px', width: '100%', height: '95%', ml: {xs:'0', md:'30px'}, mt: '-30px' }} />
                            <Box sx={{ position: 'absolute', width: '100%', height: '100%', zIndex: 99 }}>
                                <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704415415/blooom%20studio/about-us_wkofrt.png" width={340} height={480} alt='aboutus-image' loading="lazy" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ mb: { xs: '0px', md: '0' } }}>
                        {/* <Typography sx={{ fontSize: '50px', fontFamily: 'Inter', fontWeight: '600', mb: '15px' }}>Photographer</Typography> */}
                        <Typography sx={{ fontSize: '50px', fontFamily: 'Inter', fontWeight: '600', color:'black' }}>NOTRE  EQUIPES</Typography>
                        {/* <Typography sx={{ fontSize: '50px', fontFamily: 'Inter', fontWeight: '600', mt: '-35px', ml: '30px' }}>.Studio</Typography> */}
                        <Typography sx={{ fontSize: '25px', fontFamily: 'Inika', fontWeight: '400', mb: '30px', color:'black' }}>
                            The artiste a peint un portrait de sa femme. The artist painted a portrait of his wife. La ville a commandé un portrait de son plus célèbre citoyen. The city commissioned a portrait of its most famous citizen.
                        </Typography>
                        <CustomButton buttonText="Contact us" />
                        {/* <Button color="dark" pill className='bg-black	'>About Us</Button> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
