'use client'
import Image from 'next/image'
import { Grid, Box, Container, Typography } from '@mui/material'
import { Button } from 'flowbite-react';
import { Tabs } from 'flowbite-react';
import contact from '../../public/assets/imgs/contact.png'
import CustomBtn from '../buttons/CustomBtn'
import CustomButton from '../buttons/CustomBtn';

export default function ContactUs() {
  return (
    <div className='bg-stone-50 h-98 w-full'>
      <Container sx={{ pt: '10px' }}>
        <Grid container>
          <Grid item xs={12} md={7} sx={{ mb: { xs: '100px', md: '0' } }}>
            <Typography variant='h3' sx={{fontWeight:'bold'}}>Prenez un rendez-vous with us !</Typography>
            <Container sx={{border:'solid black 1px', mb:'25px'}}>
              <div className="relative mb-3">
                <input type="text" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black*-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
                <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Full name
                </label>
              </div>
              <div className="relative mb-3">
                <input type="text" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black*-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
                <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Phone
                </label>
              </div>
              <div className="relative mb-3">
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 border border-gray-300 focus:ring-black-500 focus:border-black-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black-500 dark:focus:border-black-500"
                  placeholder="Write here..."
                ></textarea>
              </div>
            </Container>
            <CustomButton buttonText='Send' />
          </Grid>
          <Grid item xs={12} md={5} >
            <Box sx={{ position: 'relative', width: '320px', height: '410px', ml: '30px', mt: '-30px' }}>
              <Box sx={{ position: 'absolute', border: 'solid #181818 1px', width: '100%', height: '95%', ml: "30px", mt: '30px' }} />
              <Box sx={{ position: 'absolute', zIndex: 99 }}>
                <Image src={contact} width={340} height={480} alt='aboutus-image' loading="lazy" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}