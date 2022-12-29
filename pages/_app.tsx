import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';


import Layout from '../src/components/Layout';
import theme from '../src/theme/theme';


export default function App({ Component, pageProps }: AppProps) {
  
  return (
      <>
      <ThemeProvider theme={theme}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
      </>

  ) 
  
}
