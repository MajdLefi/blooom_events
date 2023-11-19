import { Box, Container, Grid, Typography } from '@mui/material';
import { Tabs } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import Image from 'next/image';
import aboutus from '../../public/assets/imgs/aboutus.png'

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
        <Box className='mb-28' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 'bold',
                    writingMode: 'vertical-lr',
                    transform: 'rotate(180deg)',
                    position: { md: 'absolute', xs: 'hidden'  },
                    left: { md: '100px', xl: '400px'  },
                    top: '0px',
                    transformOrigin: 'bottom',
                }}
            >
                Services
            </Typography>
            <Tabs.Group aria-label="Pills" style="pills" theme={customTheme}>
                <Tabs.Item active title="Web dev">
                    <Box>
                        <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                            <Image src={aboutus} width={340} height={480} alt='aboutus-image' loading="lazy" />
                        </Box>
                    </Box>
                </Tabs.Item>
                <Tabs.Item active title="Socail media">
                    <Box>
                        <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                            <Image src={aboutus} width={340} height={480} alt='aboutus-image' loading="lazy" />
                        </Box>
                    </Box>
                </Tabs.Item>
                <Tabs.Item active title="Cinematograhy">
                    <Box>
                        <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                            <Image src={aboutus} width={340} height={480} alt='aboutus-image' loading="lazy" />
                        </Box>
                    </Box>
                </Tabs.Item>
                <Tabs.Item active title="Videography">
                    <Box>
                        <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                            <Image src={aboutus} width={340} height={480} alt='aboutus-image' loading="lazy" />
                        </Box>
                    </Box>
                </Tabs.Item>
                <Tabs.Item title="Photography">
                    <Box>
                        <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                            <Image src={aboutus} width={340} height={480} alt='aboutus-image' loading="lazy" />
                        </Box>
                    </Box>                </Tabs.Item>
                <Tabs.Item title="Video editing">
                    <Box>
                        <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                            <Image src={aboutus} width={340} height={480} alt='aboutus-image' loading="lazy" />
                        </Box>
                    </Box>                </Tabs.Item>
                <Tabs.Item title="Reels">
                    <Box>
                        <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                            <Image src={aboutus} width={340} height={480} alt='aboutus-image' loading="lazy" />
                        </Box>
                    </Box>                </Tabs.Item>
                <Tabs.Item title="Photo editing">
                    <Box>
                        <Box sx={{ width: '100%', height: '100%', zIndex: 99 }}>
                            <Image src={aboutus} width={340} height={480} alt='aboutus-image' loading="lazy" />
                        </Box>
                    </Box>                </Tabs.Item>
            </Tabs.Group>
        </Box>
    );
}

export default Services;
