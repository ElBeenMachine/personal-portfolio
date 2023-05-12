import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextNProgress from "nextjs-progressbar";
import colourScheme from '@/colours';

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <NextNProgress options={{ showSpinner: false }} color={colourScheme.primaryAccent} />
            <Component {...pageProps} />
            <ToastContainer />
        </ChakraProvider>
    )
}
