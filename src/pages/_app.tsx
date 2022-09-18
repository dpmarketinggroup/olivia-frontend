import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from "@mantine/core";
import Navbar from '../components/ui/Navbar';
import Footer from "../components/ui/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <MantineProvider>
    <Navbar />
    <Component {...pageProps} />
    <Footer/>
</MantineProvider>
  )
}

export default MyApp
