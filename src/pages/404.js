import { Layout } from '../layout/layout';
import Link from 'next/link'
import Head from 'next/head';
import Image from "next/image"
import imagesource from "../assets/images/404-data/agussad.webp"
import { fourcode } from "../data/data"
import { Stack } from '@mui/system';
import { ButtonMui } from '../components/Material UI/Button'
import { Typography } from '@mui/material';
import { Header } from '../sections/Header';
import Footer from '../sections/Footer';

export default function FourOhFour() {

  const fourohfourprops = {
      headline : (fourcode.title),
      desc: (fourcode.desc),
      placeholder: (fourcode.buttonPlaceholder)
  }

    return(
        <>
          <Layout>
            <Head>
              <link rel="icon" href="/logoAW.webp" sizes="32x32" />
              <meta charSet="UTF-8"></meta>
              <meta name="description" content="Next SPA"></meta>
              <meta name="author" content="Agus Wibawa"></meta>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
              <title> Page Not Found - Aguswibawa </title>
            </Head>
            <Header show_errorHeader="true"/>
            <div className="container w-3/5 xs:w-4/5 min-h-screen flex items-center justify-start mx-auto">
                <div>
                    <Stack 
                      direction="row"
                      gap="20px"
                      alignItems="center"
                    >
                      <h3 className=' text-[200px] xs:text-[120px] font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal'>4</h3>
                      <Image placeholder="empty" src={imagesource} alt="Hero Image" className=" w-[160px] h-[160px] xs:w-[100px] xs:h-[100px] border-solid border-2 border-[color:var(--clr-secondary)] rounded-full object-cover" />
                      <h3 className=' text-[200px] xs:text-[120px] font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal'>4</h3>
                    </Stack> 
                    <Stack
                      sx={{
                        margin: "-20px 0px",
                        '@media (max-width: 600px)': {
                          margin: "0px",
                          gap: "24px"
                        }
                      }}
                      direction="column"
                      gap="15px"
                    >
                      <h1 className="bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal text-[50px] xs:text-xl xs:leading-tight font-bold" >{fourohfourprops.headline}</h1>
                      <h2 className="mt-[-8px] pb-2 xs:mt-[-8px] xs:pb-0 text-[color:var(--clr-body)] text-lg leading-normal xs:text-sm xs:leading-tight font-medium">{fourohfourprops.desc}</h2>
                      <Link href="/">
                        <ButtonMui 
                          sx={{
                              backgroundColor: "var(--clr-button)",
                              borderColor: "var(--clr-button)",
                              borderRadius: "24px",
                              "&:hover": {
                                  backgroundColor: 'var(--clr-link)',
                                  borderColor: 'var(--clr-link)',
                              },
                              '&:not(:hover)': { 
                                  backgroundColor: "var(--clr-button)",
                                  borderColor: "var(--clr-button)"
                              },
                              '@media (max-width: 600px)': {
                                  fontSize: "14px"
                              }
                          }}
                        >
                          {fourohfourprops.placeholder}
                        </ButtonMui>
                      </Link>
                    </Stack>
                </div>                   
            </div>
            <Footer/>
          </Layout>
        </>
    )
}