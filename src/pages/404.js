import { Layout } from '../layout/layout';
import Link from 'next/link'
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
            <Header show_errorHeader="true"/>
            <div className="container w-3/5 xs:w-4/5 min-h-screen xs:min-h-[400px] xs:pt-28 xs:pb-10 flex items-center justify-start mx-auto">
                <div>
                    <Stack 
                      direction="row"
                      gap="20px"
                      alignItems="center"
                    >
                      <h3 className=' text-[200px] font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal'>4</h3>
                      <Image placeholder="empty" src={imagesource} alt="Hero Image" className=" w-[160px] h-[160px] xs:w-[102px] xs:h-[120px] border-solid border-2 border-[color:var(--clr-secondary)] rounded-full object-cover" />
                      <h3 className=' text-[200px] font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal'>4</h3>
                    </Stack> 
                    <Stack
                      sx={{
                        margin: "-20px 0px"
                      }}
                      direction="column"
                      gap="15px"
                    >
                      <h1 className="bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal text-[50px] xs:text-2xl xs:leading-tight font-bold" >{fourohfourprops.headline}</h1>
                      <h2 className="mt-[-8px] pb-2 xs:mt-0 xs:pb-0 text-[color:var(--clr-body)] text-lg leading-normal xs:text-2xl xs:leading-tight font-medium">{fourohfourprops.desc}</h2>
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