import '../styles/globals.css'
import '../styles/form.css'
import '../styles/modal.css'
import '../styles/dropdown.css'
import "swiper/css";
import '../styles/interactive.css'
import type {AppProps} from 'next/app'
import {MantineProvider} from "@mantine/core";
import {Navbar, OpeningBanner, Footer} from '@components/common'
import {useRouter} from "next/router";

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();
    return (
        <MantineProvider>
            {router.pathname === '/' && (
                <OpeningBanner/>
            )}
            <Navbar mainPage={router.pathname === '/' && true}/>
            <Component {...pageProps} />
            {
                router.pathname === '/404' ||
                router.pathname === '/dakujeme' ||
                router.pathname === '/dakujeme-za-email' ?
                    <Footer toBottom={true}/> : <Footer/>
            }
        </MantineProvider>
    )
}

export default MyApp
