import { Box, Container, Grid, Typography } from '@mui/material';
import { Tabs } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import Image from 'next/image';
import service1 from '../../public/assets/imgs/service1.png'
import service2 from '../../public/assets/imgs/service2.png'
import Team from './Team';

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

function Services() {
    return (
        <Box>
            <Team />
            <Box className='' style={{ paddingTop: '50px', backgroundColor: '#ECE5DC', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        writingMode: 'vertical-lr',
                        transform: 'rotate(180deg)',
                        position: { md: 'absolute', xs: 'hidden' },
                        left: { md: '100px', xl: '400px' },
                        top: '50px',
                        transformOrigin: 'bottom',
                    }}
                >
                    Services
                </Typography>
                <Tabs.Group aria-label="Pills" style="pills" theme={customTheme}>
                    <Tabs.Item active title="Web dev">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Image src={service1} width={393} height={571} alt='service1-image' loading="lazy" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                    <Box sx={{}}>
                                        <Image src={service2} width={524} height={651} alt='service1-image' loading="lazy" />
                                    </Box>
                                    <Typography sx={{ fontSize: '22px', fontFamily: 'Inika' }}>L'artiste a peint un portrait de sa femme. <br />The artist painted a portrait of his wife.<br /> The city commissioned a portrait of </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Tabs.Item>
                    <Tabs.Item active title="Socail media">
                        <Box>
                            <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                <Image src={service1} width={340} height={480} alt='service1-image' loading="lazy" />
                            </Box>
                        </Box>
                    </Tabs.Item>
                    <Tabs.Item active title="Cinematograhy">
                        <Box>
                            <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                <Image src={service1} width={340} height={480} alt='service1-image' loading="lazy" />
                            </Box>
                        </Box>
                    </Tabs.Item>
                    <Tabs.Item active title="Videography">
                        <Box>
                            <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                <Image src={service1} width={340} height={480} alt='service1-image' loading="lazy" />
                            </Box>
                        </Box>
                    </Tabs.Item>
                    <Tabs.Item title="Photography">
                        <Box>
                            <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                <Image src={service1} width={340} height={480} alt='service1-image' loading="lazy" />
                            </Box>
                        </Box>                </Tabs.Item>
                    <Tabs.Item title="Video editing">
                        <Box>
                            <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                <Image src={service1} width={340} height={480} alt='service1-image' loading="lazy" />
                            </Box>
                        </Box>                </Tabs.Item>
                    <Tabs.Item title="Reels">
                        <Box>
                            <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                <Image src={service1} width={340} height={480} alt='service1-image' loading="lazy" />
                            </Box>
                        </Box>                </Tabs.Item>
                    <Tabs.Item title="Photo editing">
                        <Box>
                            <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                                <Image src={service1} width={340} height={480} alt='service1-image' loading="lazy" />
                            </Box>
                        </Box>                </Tabs.Item>
                </Tabs.Group>
            </Box>
        </Box>
    );
}

export default Services;
