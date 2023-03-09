import '../styles/globals.css'
import { ThemeProvider } from '../context/theme'
import { Inter } from '@next/font/google'
import { BrowserRouter } from 'react-router-dom';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <ThemeProvider>
          <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}
