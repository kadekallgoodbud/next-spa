import { useState, useEffect } from "react";

export default function ScrollTop() {
    const [isVisible, setVisible] = useState(false)

    const scrollEffect = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(()=> {
        const toggleVisibility = () => {
            if(window.pageYOffset > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll',toggleVisibility)
    },[])

    return(
        <div className="relative h-25 w-25 bg-black ">
            {isVisible && (
            <div onClick={scrollEffect} className=" text-white hover:text-white cursor-pointer opacity-100 hover:opacity-100"> 
                <div className="  transition-transform duration-200 ease-in-out hover:scale-110 bg-[color:var(--clr-border)] hover:bg-[color:var(--clr-link)] py-2 px-2 border-2 hover:border-[color:var(--clr-link)] border-[color:var(--clr-border)] rounded-full fixed bottom-[32px] xs:bottom-[20px] xs:right-[14px] right-[32px] h-12 w-12"/>
            </div>
            )}
        </div>
    )

}