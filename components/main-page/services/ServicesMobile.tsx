import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Box, Typography, Container, IconButton, useMediaQuery } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Slider from 'react-slick';
import IconArrowBack from '@mui/icons-material/ArrowBack';
import IconArrowForward from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const SliderArrow = (props) => {
  const { onClick, type, className } = props;
  return (
    <IconButton
    sx={{
      display:'none',
      backgroundColor: 'background.paper',
      color: 'primary.main',
      '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
      position: 'absolute',
      bottom: { xs: '-70px !important', md: '-28px !important' },
      left: 'unset !important',
      right: type === 'prev' ? '60px !important' : '0 !important',
      zIndex: 10,
      boxShadow: 1,
    }}
      disableRipple
      color="inherit"
      onClick={onClick}
      //className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  );
};

const StyledDots = styled('ul')(({ theme }) => ({
  '&.slick-dots': {
    position: 'absolute',
    left: 0,
    bottom: -20,
    paddingLeft: theme.spacing(1),
    textAlign: 'left',
    '& li': {
      marginRight: theme.spacing(2),
      '&.slick-active>div': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}));

const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop:'30px',
  paddingBottom:'30px'
}));

export default function ServicesMobile ()  {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down('md'));

  const sliderConfig = {
    height:'800px',
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: matchMobileView ? 1 : 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    dots: false,
    appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
    customPaging: () => (
      <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
    ),
  };

  return (
    <Box id="popular-course" sx={{ backgroundColor: "#ECE5DC", pb:{xs:'5px', md:'0px'}}}>
       <Box className="max-w-2xl mx-auto text-center pt-6 mb-6 lg:mb-6">
        <Box className="relative">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Our services !</h2>
          </Box>
          {/* <p className="mt-1 text-gray-600 ">Explorez les tendances actuelles de l'univers technologique avec 3W Academy.</p> */}
        </Box>
      <Container maxWidth="lg">
      <Slider {...sliderConfig}>
        <Box sx={{ width: '100%', zIndex: 99 }}>
            <Box sx={{mb:'20px'}}>
                <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704311460/blooom%20studio/pexels-kyle-loftus-2510425_c22ifx.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
            </Box>
            <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Videography : With our videography service, we turn moments into visual <br/> masterpieces, creating impactful narratives.</Typography>
        </Box>
        <Box sx={{ width: '100%', zIndex: 99, }}>
            <Box sx={{mb:'20px'}}>
              <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704307882/blooom%20studio/pexels-david-bartus-610293_nomhgd.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
             </Box>
           <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Photo editing : Our photo editing service turns ordinary visuals into <br/> extraordinary pieces of art !</Typography>
        </Box>
        <Box sx={{ width: '100%', zIndex: 99 }}>
                <Box sx={{mb:'20px'}}>
                    <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704311322/blooom%20studio/pexels-mikael-blomkvist-4152297_is36ne.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                </Box>
                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Shooting : We skillfully capture teh magic of moments, turning ordinary <br/> scenes into extraordinary visual tales ..</Typography>
        </Box>
        <Box sx={{ width: '100%',  zIndex: 99 }}>
                    <Box sx={{mb:'20px'}}>
                        <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704309418/blooom%20studio/pexels-cottonbro-studio-4270223_g8ne48.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                    </Box>
                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Reels : Our Reels service distills moments into dynamic visual <br/> stories, perfect for capturing attention</Typography>
        </Box>
        <Box sx={{ width: '100%',  zIndex: 99 }}>
                    <Box sx={{mb:'20px'}}>
                        <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704306944/blooom%20studio/pexels-jonathan-borba-3285203_jmvmce.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                    </Box>
                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Web dev : Our web development expertise shapes the digital future of <br/> your brand</Typography>
        </Box>
        <Box sx={{ width: '100%', zIndex: 99 }}>
                    <Box sx={{mb:'20px'}}>
                        <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704307599/blooom%20studio/pexels-cottonbro-studio-5081930_dn9hqc.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                    </Box>
                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Social media management : Elevating your brand's digital presence, our social media <br/> management service engages, and sparks conversations </Typography>
        </Box>
        <Box sx={{ width: '100%',  zIndex: 99 }}>
                    <Box sx={{mb:'20px'}}>
                        <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704313499/blooom%20studio/pexels-vlada-karpovich-7433839_kegsu8.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                    </Box>
                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Marketing strategy : Our digital marketing service goes beyound clicks. <br/> We will connect your brand with the right audience ! </Typography>
        </Box>
        </Slider>
      </Container>
    </Box>
  );
};
 

