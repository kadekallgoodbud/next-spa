import Head from 'next/head'
import { Header } from '../sections/Header'
import ScrollTop from '../components/Scroll'
import { ButtonToggler } from '../components/Toggle'
import DrawerSidebar from '../components/Muidrawer'
import Hero from '../sections/Hero'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme'

export default function Home() {
  const [{themeName}] = useContext(ThemeContext);
  return (
  <>
      <div className={`${themeName} app`} >
        <Head>
          <link rel="icon" href="https://blog.logrocket.com/wp-content/uploads/2019/06/cropped-cropped-favicon-196x196-32x32.png" sizes="32x32" />
          <meta charSet="UTF-8"></meta>
          <meta name="description" content="Next SPA"></meta>
          <meta name="author" content="Agus Wibawa"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Header/>
        <ButtonToggler/>
        <Hero/>
        <ScrollTop/>
      </div>
  </>
  )
}
