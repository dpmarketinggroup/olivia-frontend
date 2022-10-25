import '../styles/globals.css'
import '../styles/form.css'
import '../styles/swiper.css'
import '../styles/dropdown.css'
import "swiper/css";
import '../styles/interactive.css'
import type {AppProps} from 'next/app'
import {MantineProvider} from "@mantine/core";
import {Navbar, Footer} from '@components/common'
import {useRouter} from "next/router";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="theme-color" content="#ffffff"/>
                {/*<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="fefafcaa-5d1e-4369-84f5-b19f54db2b38" data-blockingmode="auto" type="text/javascript"></script>*/}
            </Head>
            <MantineProvider>
                <Navbar mainPage={router.pathname === '/' && true}/>
                <Component {...pageProps} />
                {
                    router.pathname === '/404' ||
                    router.pathname === '/dakujeme' ||
                    router.pathname === '/dakujeme-za-email' ?
                        <Footer toBottom={true}/> : <Footer/>
                }
            </MantineProvider>
        </>
    )
}

export default MyApp
