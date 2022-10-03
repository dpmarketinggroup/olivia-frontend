import '../../styles/globals.css'
import '../../styles/form.css'
import '../../styles/modal.css'
import '../../styles/table.css'
import '../../styles/dropdown.css'
import '../../styles/interactivBuilding.css'
import type {AppProps} from 'next/app'
import {MantineProvider} from "@mantine/core";
import Navbar from '../components/ui/Navbar';
import Footer from "../components/ui/Footer";
import Banner from "../components/Banner";
import {useRouter} from "next/router";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter();
    return (
        <MantineProvider>
            {router.pathname === '/' && (
                <Banner/>
            )}
            <Navbar/>
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
