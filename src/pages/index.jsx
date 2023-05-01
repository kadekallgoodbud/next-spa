import { Layout } from '@/layout/layout';
import { Header } from '@/sections/Header';
import Head from 'next/head';
import Hero from '@/sections/Home/Hero';
import About from '@/sections/Home/About';
import Tools from '@/sections/Home/Tools';
import Project from '@/sections/Home/Project';
import Contact from '@/sections/Home/Contact';
import Footer from '@/sections/Footer'
import { Element } from "react-scroll";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="This is WebApp Portfolio of Agus Wibawa" />
          <meta name="keywords" content="Portfolio, WebApp, Agus Wibawa" />
          <meta name="author" content="Agus Wibawa" />

          {/* Open Graph tags for Facebook */}
          <meta property="og:title" content="Portfolio Agus Wibawa" />
          <meta property="og:description" content="This is WebApp Portfolio of Agus Wibawa" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://aguswibawa.com" />
          <meta property="og:image" content="/logoAW.webp" />
          <meta property="og:image:alt" content="Portfolio Agus Wibawa" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Agus Wibawa Portfolio" />

          {/* Twitter Card tags for Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Portfolio Agus Wibawa" />
          <meta name="twitter:description" content="This is WebApp Portfolio of Agus Wibawa" />
          <meta name="twitter:image" content="/logoAW.webp" />
          <meta name="twitter:image:alt" content="Portfolio Agus Wibawa" />

          {/* Google meta tags */}
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <title> Portfolio Aguswibawa </title>

        </Head>
        <Header show_defaultHeader={true} />
        <Hero />
        <main className='flex flex-col gap-10 xs:gap-6'>
          <Element name="section1">
            <About />
          </Element>
          <Element name="section2">
            <Project />
          </Element>
          <Element name="section3">
            <Tools />
          </Element>
          <Element name="section4">
            <Contact />
          </Element>
        </main>
        <Footer />
      </Layout>
    </>
  )

}
