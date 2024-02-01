import "../styles/globals.css";
import "../styles/form.css";
import "../styles/swiper.css";
import "../styles/dropdown.css";
import "swiper/css";
import "../styles/interactive.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Navbar from "@components/common/Navbar";
import Footer from "@components/common/Footer";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1627919310974830"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <MantineProvider>
        {/*Google Tag Manager*/}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-KCZ89HB');
                    `,
          }}
        />
        {/*End Google Tag Manager*/}
        <Navbar mainPage={router.pathname === "/" && true} />
        <Component {...pageProps} />
        {router.pathname === "/404" ||
          router.pathname === "/dakujeme" ||
          router.pathname === "/dakujeme-za-email" ? (
          <Footer toBottom={true} />
        ) : (
          <Footer />
        )}
      </MantineProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
