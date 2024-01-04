import { Box, Container, Button, Grid, Typography } from '@mui/material';
import { Tabs } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import Image from 'next/image';
import service1 from '../../public/assets/imgs/service1.png'
import service2 from '../../public/assets/imgs/service2.png'
import CustomButton from '../buttons/CustomBtn';
import ServicesMobile from './services/ServicesMobile';

const customTheme: CustomFlowbiteTheme['tab'] = {
    base: "flex flex-col gap-2",
    tablist: {
        base: "flex text-center",
        tabitem: {
            styles: {
                pills: {
                    base: "text-black font-bold border-b ",
                    active: {
                        on: "border-black",
                        off: "font-normal",
                    },

                },
            }
        }
    },
    tabitemcontainer: {
        base: "",
        styles: {
            default: "",
            underline: "",
            pills: "",
            fullWidth: ""
        }
    },
    tabpanel: "py-3"
};

export default function Services() {
    return (
        <Box sx={{ backgroundColor: '#ECE5DC' }}>
            <Box sx={{display:{xs:'none', md:'block'}}}>
            <Box className='' sx={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <Typography
                    variant="h3"
                    sx={{ fontWeight: 'bold',color:'black', writingMode: 'vertical-lr', transform: 'rotate(180deg)', position: { md: 'absolute', xs: 'hidden' }, left: { md: '100px', xl: '400px' }, top: '50px', transformOrigin: 'bottom',}}>
                    Services
                </Typography>
                <Tabs.Group aria-label="Pills" style="pills" theme={customTheme}>
                    <Tabs.Item active title="Videography">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704311460/blooom%20studio/pexels-cottonbro-studio-2773515_kfkwbz.jpg" width={393} height={571} alt='service1-image' loading="lazy" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Box sx={{mb:'20px'}}>
                                        <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704311460/blooom%20studio/pexels-kyle-loftus-2510425_c22ifx.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                                    </Box>
                                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>With our videography service, we turn moments into visual <br/> masterpieces, creating impactful narratives.</Typography>
                                </Box>
                            </Grid>
                        </Grid>        
                    </Tabs.Item>
                    <Tabs.Item title="Photo editing">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704307883/blooom%20studio/pexels-diana-jefimova-3309467_bwsjbf.jpg" width={393} height={571} alt='service1-image' loading="lazy" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Box sx={{mb:'20px'}}>
                                        <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704307882/blooom%20studio/pexels-david-bartus-610293_nomhgd.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                                    </Box>
                                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Our photo editing service turns ordinary visuals into <br/> extraordinary pieces of art !</Typography>
                                </Box>
                            </Grid>
                        </Grid>              
                    </Tabs.Item>
                    <Tabs.Item title="Shooting">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704311322/blooom%20studio/pexels-anna-shvets-12674086_kww7lg.jpg" width={393} height={571} alt='service1-image' loading="lazy" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Box sx={{mb:'20px'}}>
                                        <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704311322/blooom%20studio/pexels-mikael-blomkvist-4152297_is36ne.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                                    </Box>
                                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>We skillfully capture teh magic of moments, turning ordinary <br/> scenes into extraordinary visual tales ..</Typography>
                                </Box>
                            </Grid>
                        </Grid>         
                    </Tabs.Item>
                    <Tabs.Item title="Reels">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704309419/blooom%20studio/pexels-cup-of-couple-6177645_pr928f.jpg" width={393} height={571} alt='service1-image' loading="lazy" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Box sx={{mb:'20px'}}>
                                        <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704309418/blooom%20studio/pexels-cottonbro-studio-4270223_g8ne48.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                                    </Box>
                                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Our Reels service distills moments into dynamic visual <br/> stories, perfect for capturing attention</Typography>
                                </Box>
                            </Grid>
                        </Grid>             
                    </Tabs.Item>
                    <Tabs.Item active title="Web dev">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704307306/blooom%20studio/pexels-cottonbro-studio-7438096_xbuw3q.jpg" width={393} height={571} alt='service1-image' loading="lazy" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Box sx={{mb:'20px'}}>
                                        <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704306944/blooom%20studio/pexels-jonathan-borba-3285203_jmvmce.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                                    </Box>
                                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Our web development expertise shapes the digital future of <br/> your brand</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Tabs.Item>
                    <Tabs.Item active title="Social media management">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704307623/blooom%20studio/pexels-cottonbro-studio-5082576_rnwijw.jpg" width={393} height={571} alt='service1-image' loading="lazy" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Box sx={{mb:'20px'}}>
                                        <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704307599/blooom%20studio/pexels-cottonbro-studio-5081930_dn9hqc.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                                    </Box>
                                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Elevating your brand's digital presence, our social media <br/> management service engages, and sparks conversations </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Tabs.Item>
                    <Tabs.Item  title="Marketing strategy">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704312677/blooom%20studio/pexels-leeloo-thefirst-7598018_w6esvd.jpg" width={393} height={571} alt='service1-image' loading="lazy" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Box sx={{mb:'20px'}}>
                                        <Image src="https://res.cloudinary.com/dtp3jjqrq/image/upload/v1704313499/blooom%20studio/pexels-vlada-karpovich-7433839_kegsu8.jpg" width={524} height={651} alt='service1-image' loading="lazy" />
                                    </Box>
                                    <Typography sx={{ fontSize: '21.5px', fontFamily: 'Inika', color:'black' }}>Our digital marketing service goes beyound clicks. <br/> We will connect your brand with the right audience ! </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Tabs.Item>
                </Tabs.Group>
            </Box>
            </Box>
           <Box sx={{display:{xs:'block', md:'none'}}}>
                <ServicesMobile />
           </Box>
            {/* <Box sx={{pt:'30px', pb:'50px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <CustomButton buttonText="Explore more" />
            </Box> */}
        </Box>
    );
}


