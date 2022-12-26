import Hero from '../sections/Hero'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { data } from '../data/data'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
     <Hero name={data.hero.name}/>
  </>
  )
}
