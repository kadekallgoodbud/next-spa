import Hero from '../sections/Hero'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { data } from '../data/data'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <Head>
      <link rel="icon" href="https://blog.logrocket.com/wp-content/uploads/2019/06/cropped-cropped-favicon-196x196-32x32.png" sizes="32x32" />
      <meta charset="UTF-8"></meta>
      <meta name="description" content="Next SPA"></meta>
      <meta name="author" content="Agus Wibawa"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
     <Hero name={data.hero.name}/>
  </>
  )
}
