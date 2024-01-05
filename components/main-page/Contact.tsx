import Image from 'next/image'
import type { GetServerSideProps } from "next";
import { Grid, Box, Container, Typography } from '@mui/material'
import { Tabs } from 'flowbite-react';
import CustomBtn from '../buttons/CustomBtn'
import CustomButton from '../buttons/CustomBtn';

export default function ContactUs() {
  return (
    <Box className='bg-stone-50 h-98 w-full pt-14 pb-14 sm:pb-0'>
      <Container sx={{ pt: '10px' }}>
        <Grid container>
          <Grid item xs={12} md={7} sx={{ mb: { xs: '0px', md: '40px' } }}>
            <Typography variant='h3' sx={{fontWeight:'bold', color:'black'}}>Contact us !</Typography>
            <Container sx={{border:'solid black 1px', mb:'25px'}}>
              <Box className="relative mb-3">
                <input type="text" id="fullName" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
                <label htmlFor="fullName" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Full name
                </label>
              </Box>
              <Box className="relative mb-3">
                <input type="text" id="phone" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black*-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder="" />
                <label htmlFor="phone" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Phone
                </label>
              </Box>
              <Box className="relative mb-3">
                <input type="text" id="email" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-black*-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder="" />
                <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                  Email
                </label>
              </Box>
              <Box className="relative mb-3">
                <textarea
                  id="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 border border-gray-300 focus:ring-black-500 focus:border-black-500 dark:focus:ring-black-500 dark:focus:border-black-500"
                  placeholder="Write here..."
                ></textarea>
              </Box>
            </Container>
            <CustomButton buttonText='Send' />
          </Grid>
          <Grid item xs={12} md={5} sx={{textAlign:'center', display:{xs:'none', md:'block'}}}>
            <Box sx={{ position: 'relative', width: '320px', height: '410px', ml: '120px', mt: '-30px' }}>
              <Box sx={{ position: 'absolute', border: 'solid #181818 1px', width: '100%', height: '95%', ml: "30px", mt: '30px' }} />
              <Box sx={{ position: 'absolute', zIndex: 99 }}>
                <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704415364/blooom%20studio/contact_evt9k3.png" width={340} height={480} alt='aboutus-image' loading="lazy" />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // add Cache-Control HTTP Header to response
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return {
    props: {
    },
  };
};
