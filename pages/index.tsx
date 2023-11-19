import Image from 'next/image'
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/layout"), { ssr: false });
const HeroSection = dynamic(() => import("../components/main-page/HeroSection"), { ssr: false });
const ContactBar = dynamic(() => import("../components/main-page/ContactBar"), { ssr: false });
const AboutUs = dynamic(() => import("../components/main-page/AboutUs"), { ssr: false });
const Album = dynamic(() => import("../components/main-page/Album"), { ssr: false });
const Services = dynamic(() => import("../components/main-page/Services"), { ssr: false });
const WhyUs = dynamic(() => import("../components/main-page/WhyUs"), { ssr: false });
const SocialMedia = dynamic(() => import("../components/main-page/SocialMedia"), { ssr: false });
const Shooting = dynamic(() => import("../components/main-page/services/Shooting"), { ssr: false });
const ContactUs = dynamic(() => import("../components/main-page/Contact"), { ssr: false });

import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      {/* <ContactBar /> */}
      <AboutUs />
      <Album />
      <SocialMedia />
      <Services />
      <ContactUs />
      <Shooting />
      {/* <WhyUs /> */}
    </Layout>
  )
}
