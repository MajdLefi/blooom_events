import Image from 'next/image'
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/layout"), { ssr: false });
const HeroSection = dynamic(() => import("../components/main-page/HeroSection"), { ssr: false });
const ContactBar = dynamic(() => import("../components/main-page/ContactBar"), { ssr: false });
const AboutUs = dynamic(() => import("../components/main-page/AboutUs"), { ssr: false });
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ContactBar />
      <AboutUs />
    </Layout>
  )
}
