import Image from "next/image"
import imagesource from "@/assets/images/hero-images/agus.webp"
import { data } from "@/data/data";
import ReactTyped from "react-typed"

export default function Hero() {
  const HeroProps = {
    intro: (data.hero.intro),
    name: (data.hero.name),
    desc: (data.hero.desc),
    occupation: (data.hero.occupation),
    social: (data.hero.social)
  }
  return (
    <>
      <div className="container w-3/5 xs:w-4/5 min-h-screen xs:min-h-[400px] xs:pt-28 xs:pb-10 flex items-center justify-start mx-auto">
        <div className="text-left xs:flex xs:flex-col xs:gap-2">
          <Image placeholder="empty" src={imagesource} alt="Hero Image" className=" w-[160px] h-[160px] xs:w-[120px] xs:h-[120px] border-solid border-2 border-[#1a58a4] rounded-full object-cover" />
          <h1 className="bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal text-[55px] xs:text-2xl xs:leading-tight font-bold" >{HeroProps.intro}</h1>
          <h2 className="mt-[-8px] pb-2 xs:mt-0 xs:pb-0 bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent text-[55px] leading-normal xs:text-2xl xs:leading-tight font-bold">{HeroProps.name}</h2>
          <h3 className="text-2xl xs:text-base font-semibold text-[color:var(--clr-text-custom)]">
            <ReactTyped
              strings={HeroProps.occupation}
              typeSpeed={50}
              backSpeed={20}
              loop={true}
              backDelay={2000}
            />
          </h3>
          <p className="text-lg xs:text-sm xs:py-0 xs:pt-1 text-[color:var(--clr-body)] font-normal py-3">
            {HeroProps.desc}
          </p>
        </div>
      </div>
    </>
  )
}
