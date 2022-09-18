import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from "@mantine/core";
import Navbar from '../components/ui/Navbar';
import Footer from "../components/ui/Footer";
import Banner from "../components/Banner";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return( 
  <MantineProvider>
    {router.pathname === '/' && (
        <Banner/>
    )}
    <Navbar />
    <Component {...pageProps} />
    <Footer/>
</MantineProvider>
  )
}

export default MyApp
