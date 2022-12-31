import Image from "next/image"
import imagesource from "../assets/images/hero-images/agus.webp"
import { Button } from "@mui/material"
import { btnHero } from "../assets/scripts/button"
import { data } from "../data/data"
import ReactTyped from "react-typed"

export default function Hero() {
    const HeroProps = {
        name : (data.hero.name),
        occupation: (data.hero.occupation),
        social: (data.hero.social)
    }    
    return(
        <>
            <div className="container w-full h-[2000px] pt-36 pb-8 mx-auto">
                <div className="m-auto text-center flex flex-col space-y-3 items-center justify-center">
                    <Image width={140} height={140} src={imagesource} alt="Hero Image" className="border-solid border-2 border-[#1a58a4] rounded-full m-auto object-cover" />
                    <h1 className="text-6xl text-center font-bold">Hey, I'm {HeroProps.name}</h1>
                    <h3 className="text-2xl font-semibold">
                        <ReactTyped
                            strings={HeroProps.occupation}
                            typeSpeed={50}
                            backSpeed={20}
                            loop={true}
                            backDelay={2000}
                        />
                    </h3>
                </div>
                
                <Button variant="outlined" theme={btnHero}>Button</Button>
            </div>
        </>
    )
}