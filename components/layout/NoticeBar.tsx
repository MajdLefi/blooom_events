import Link from "next/link";
import { Box, Container, AppBar, Toolbar, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function NoticeBar() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" sx={{backgroundColor: "#ECE5DC", borderBottom:'solid 1px black', color:'black', height:'30px'}}>
      <Container sx={{mt:{xs:'-12px', md:'-17px'}}}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" sx={{textAlign:'center', m:{xs:'0 auto 0 auto', md:0}, fontSize:{xs:'12px',md:'15px'}, fontWeight:'bold'}}>Contact us on WhatsApp : +216 51 80 08 38</Typography>
          <Box
            className={`flex space-x-6 ${isMobileView ? "sm:justify-end" : "justify-center"}`}
            sx={{display :{xs:'none',md:'block'},  position: isMobileView ? "absolute" : "static", top: 0, right: 0 }}
          >
            <Link href="https://www.facebook.com/the.blooom.studio" passHref>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
            </Link>
            <Link href="https://www.instagram.com/blooom.studio__/" passHref>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
            </Link>
            <Link href="https://www.youtube.com/@Blooom_Studio" passHref>
              <IconButton color="inherit">
                <YouTubeIcon />
              </IconButton>
            </Link>
            {/* <Link href="https://www.linkedin.com/company/3w-academy-tunis" passHref>
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Link> */}
          </Box>
        </Toolbar>
      </Container>
      {/* <Box sx={{mt:'-5px'}} className='bg-amber-100 h-2 text-amber-100'>.</Box> */}
    </AppBar>
  );
}
