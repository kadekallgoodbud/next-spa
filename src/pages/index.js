import { Layout } from '../layout/layout';
import Head from 'next/head';
import Hero from '../sections/Hero';
import About from '../sections/About';
import {Project} from '../sections/Project';

export default function Home() {
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
        <About/>
        <Project />
    </Layout>
  </>
  )
}
