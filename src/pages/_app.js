import '../styles/globals.css'
import React, {useEffect} from 'react';
import { ThemeProvider } from '../context/theme'
import { Inter } from '@next/font/google'
import { initGA, logPageView } from '../../analytics'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }) {

  useEffect(() => {
      initGA();
      logPageView();
  },[]);

  return (
    <main className={inter.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider>
          <Component {...pageProps} />
          <Analytics />
      </ThemeProvider>
    </main>
  )
}

export default App;
