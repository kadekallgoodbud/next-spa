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
            <div className="container w-3/5 h-[2000px] pt-36 pb-8 mx-auto">
                <div className="m-auto text-center flex flex-col space-y-3 items-start">
                    <Image placeholder="empty" width={120} height={120} src={imagesource} alt="Hero Image" className="border-solid border-2 border-[#1a58a4] rounded-full object-cover" />
                    <h1 className="bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent text-6xl xs:text-5xl xs:leading-tight pb-[10px] pt-[10px] font-semibold">Hey, I'm {HeroProps.name}</h1>
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
                
                
            </div>
        </>
    )
}