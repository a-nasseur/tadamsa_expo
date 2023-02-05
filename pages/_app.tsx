import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

// Custom components imports
import '../config/firebase';
import theme from '../src/theme/theme';

// Extending the types to include nested layouts per page
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

// App new Props
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}




export default function App({ Component, pageProps }: AppPropsWithLayout) {

   // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  
  return (
      <>
      <ThemeProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
      </>

  ) 
  
}
