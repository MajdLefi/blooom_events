'use client'
import Image from 'next/image'
import { Grid, Box, Container, Typography } from '@mui/material'
import { Button } from 'flowbite-react';
import { Tabs } from 'flowbite-react';
// import aboutus from '../../public/assets/imgs/aboutus.png'
import aboutus from '../../public/assets/imgs/about-us.jpeg'
import CustomButton from '../buttons/CustomBtn';

export default function AboutUs() {
  return (
    <div className='bg-efefef h-98 w-full mb-28'>
      <Container sx={{ pt: '70px' }}>
        <Grid container>
          <Grid item xs={12} md={7} sx={{mb:{xs:'100px', md:'0'}}}>
            {/* <Typography sx={{ fontSize: '50px', fontFamily: 'Inter', fontWeight: '600', mb: '15px' }}>Photographer</Typography> */}
            <Typography sx={{ fontSize: '50px', fontFamily: 'Inter', fontWeight: '600', }}>Blooom</Typography>
            <Typography sx={{ fontSize: '50px', fontFamily: 'Inter', fontWeight: '600', mt: '-35px', ml: '30px' }}>.Studio</Typography>
            <Typography sx={{ fontSize: '25px', fontFamily: 'Inika', fontWeight: '400', mb:'30px' }}>
              Découvrez blooom events equipe pro et profiter travail de haute qualité, <br />
              Découvrez blooom events equipe pro et profiter travail de haute qualité,  
            </Typography>
            <CustomButton buttonText="About us" />
            {/* <Button color="dark" pill className='bg-black	'>About Us</Button> */}
          </Grid>
          <Grid item xs={12} md={5} >
            <Box sx={{ position: 'relative',  width: '320px', height: '410px', ml: '30px', mt: '-30px'}}>
              <Box sx={{ position: 'absolute', border: 'solid #181818 1px', width: '100%', height: '95%', ml: "30px", mt: '-30px'}} />
              <Box sx={{ position: 'absolute', width: '100%',  height: '100%',  zIndex: 99 }}>
                <Image src={aboutus} width={340} height={480} alt='aboutus-image' loading="lazy" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* <Tabs aria-label="Pills" style="pills">
            <Tabs.Item active title="Tab 1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Content 1</p>
            </Tabs.Item>
            <Tabs.Item title="Tab 2">
                <p className="text-sm text-gray-500 dark:text-gray-400">Content 2</p>
            </Tabs.Item>
            <Tabs.Item title="Tab 3">
                <p className="text-sm text-gray-500 dark:text-gray-400">Content 3</p>
            </Tabs.Item>
            <Tabs.Item title="Tab 4">
                <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
            </Tabs.Item>
            <Tabs.Item disabled title="Tab 5">
                <p className="text-sm text-gray-500 dark:text-gray-400">Content 5</p>
            </Tabs.Item>
        </Tabs> */}
      </Container>
    </div>
  )
}