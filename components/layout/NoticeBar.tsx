import Link from "next/link";
import { Box, Container, AppBar, Toolbar, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function NoticeBar() {
  const theme = useTheme();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" sx={{backgroundColor: "#181818", height:'60px'}}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1">Contactez-nous sur WhatsApp : +216 51 80 08 38</Typography>
          <Box
            className={`flex space-x-6 ${isMobileView ? "sm:justify-end" : "justify-center"}`}
            sx={{ position: isMobileView ? "absolute" : "static", top: 0, right: 0 }}
          >
            <Link href="https://www.facebook.com/3WAcademyTunis/" passHref>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
            </Link>
            <Link href="https://www.instagram.com/3wa_tunis/" passHref>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
            </Link>
            <Link href="https://twitter.com/3WAcademyTunis" passHref>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/company/3w-academy-tunis" passHref>
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
      <Box sx={{mt:'-5px'}} className='bg-amber-100 h-2 text-amber-100'>.</Box>
    </AppBar>
  );
}
