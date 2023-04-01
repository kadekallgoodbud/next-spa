import '../styles/globals.css'
import React, {useEffect} from 'react';
import { ThemeProvider } from '../context/theme'
import { Inter } from '@next/font/google'
import { initGA, logPageView } from '../../analytics';

const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }) {

  useEffect(() => {
      initGA();
      logPageView();
  },[]);

  return (
    <main className={inter.className}>
      <ThemeProvider>
          <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}

export default App;
