import { Layout } from '../layout/layout';
import { Header } from '../sections/Header';
import Head from 'next/head';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Tools from '../sections/Tools';
import Project from '../sections/Project';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer'
import { data } from '../data/data';
import { Element } from "react-scroll";

export default function Home() {
  const pval = (data.project.title) 
  console.log(pval)
  return (
  <>
    <Layout>
        <Head>
          <link rel="icon" href="/logoAW.webp" sizes="32x32" />
          <meta charSet="UTF-8"></meta>
          <meta name="description" content="Next SPA"></meta>
          <meta name="author" content="Agus Wibawa"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title> Portfolio Aguswibawa </title>
        </Head>
        <Header show_defaultHeader={true} />
        <Hero/>
        <main className='flex flex-col gap-10 xs:gap-6'>
        <Element name="section1">
          <About/>
        </Element>
        <Element name="section2">
          <Project/>
        </Element>
        <Element name="section3">
          <Tools/>
        </Element>
        <Element name="section4">
          <Contact />
        </Element>
        </main>
        <Footer/>
    </Layout>
  </>
  )
  
}
