import React from "react";
import Dynamic from "next/dynamic";
import Box from "@mui/material/Box";

const Header = Dynamic(() => import("./Header"), { ssr: false });
// import Header from './header'

const Foooter = Dynamic(() => import("./Footer"), { ssr: false });
//import Footer from './footer'

interface LayoutProps {
    children: React.ReactNode;
  }

const Layout : React.FC<LayoutProps> =  ({ children }) => {
  return (
    <Box>
      <Header />
        <main>{children}</main>
      <Foooter />
    </Box>
  );
}

export default Layout


