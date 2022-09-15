import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from "@mantine/core";
import Navbar from '../components/ui/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return( 
  <MantineProvider>
    <Navbar />
    <Component {...pageProps} />
</MantineProvider>
  )
}

export default MyApp
