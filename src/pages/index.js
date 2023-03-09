import { Layout } from '../layout/layout';
import Head from 'next/head';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Tools from '../sections/Tools';
import Contact from '../sections/Contact';
import { Project } from '../sections/Project';
import { data } from '../data/data';
import { Element } from "react-scroll";

export default function Home() {
  const pval = (data.project.title) 
  console.log(pval)
  return (
  <>
    <Layout>
        <Head>
          <link rel="icon" href="https://blog.logrocket.com/wp-content/uploads/2019/06/cropped-cropped-favicon-196x196-32x32.png" sizes="32x32" />
          <meta charSet="UTF-8"></meta>
          <meta name="description" content="Next SPA"></meta>
          <meta name="author" content="Agus Wibawa"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Hero/>
        <main className='flex flex-col gap-10'>
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
    </Layout>
  </>
  )
  
}
