import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import shooting0 from '../../public/assets/imgs/shooting0.jpeg'
import shooting1 from '../../public/assets/imgs/shooting1.jpeg'
import shooting2 from '../../public/assets/imgs/shooting2.jpeg'
import shooting3 from '../../public/assets/imgs/shooting3.jpeg'
import CustomButton from '../buttons/CustomBtn'

export default function SocialMedia() {
    return (
        <Container className='mb-28'>
            <Grid container>
                <Grid item xs={12} md={3.5}>
                    <Box sx={{ textAlign: 'center',}}>
                        <Image src={shooting0} width={320} height={410} alt='aboutus-image' loading="lazy" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8.5} sx={{}} spacing={3}>
                <Typography variant='h2' sx={{mb:'18px'}}>Plan your shooting with us !</Typography>
                <Typography variant='h3' sx={{mb:'18px'}}>Plan your shooting with us !</Typography>
                    {/* <CustomButton /> */}
                    <Box sx={{display:'flex',}}>
                    <Box sx={{ textAlign: 'center', mr:{xs:'10px',md:'40px'} ,border:'solid black 1px',width:{xs:'320px',md:'320px'}, height:{xs:'90px',md:'220px'}}}>
                        <Image src={shooting1} width={320} height={320} alt='aboutus-image' loading="lazy" />
                    </Box>
                    <Box sx={{ textAlign: 'center', mr:{xs:'10px',md:'40px'} ,border:'solid black 1px',width:{xs:'320px',md:'320px'}, height:{xs:'90px',md:'220px'}}}>
                        <Image src={shooting2} width={320} height={320} alt='aboutus-image' loading="lazy" />
                    </Box>
                    <Box sx={{ textAlign: 'center',border:'solid black 1px', width:{xs:'320px',md:'320px'}, height:{xs:'90px',md:'220px'}}}>
                        <Image src={shooting3} width={320} height={320} alt='aboutus-image' loading="lazy" />
                    </Box>
                    </Box>
                </Grid>

            </Grid>

        </Container>
    )
}
