import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-68KCW96EV2"
      />

      <Script id="google-analytics-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', G-68KCW96EV2 , {
          page_path: window.location.pathname,
          });
    `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
