import Image from "next/image"
import imagesource from "../assets/images/hero-images/agus.webp"
import { Button } from "@mui/material"
import { btnHero } from "../assets/scripts/button"
import { data } from "../data/data"
import ReactTyped from "react-typed"

export default function Hero() {
    const HeroProps = {
        intro: (data.hero.intro),
        name : (data.hero.name),
        occupation: (data.hero.occupation),
        social: (data.hero.social)
    }    
    return(
        <>
            <div className="container w-3/5 min-h-screen flex items-center justify-start mx-auto">
                <div className="text-left">
                    <Image placeholder="empty" width={130} height={130} src={imagesource} alt="Hero Image" className="border-solid border-2 border-[#1a58a4] rounded-full object-cover" />
                    <h1 className="bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent text-5xl leading-normal xs:text-5xl xs:leading-tight font-bold">{HeroProps.intro}</h1>
                    <h2 className="mt-[-10px] bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent text-5xl leading-normal xs:text-4xl xs:leading-tight font-bold">{HeroProps.name}</h2>
                    <h3 className="text-2xl font-semibold text-[color:var(--clr-text-custom)]">
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