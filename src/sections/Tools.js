import React from "react";
import { data } from "../data/data";

const toolsProps = {
    title: (data.tools.title),
    desc: (data.tools.desc),
    skills: (data.tools.skills),
}

export default function Tools() {
    return(

        <>
            <div className="container mx-auto w-3/5 xs:w-4/5 mt-6">
                <div className="flex flex-col gap-5 xs:gap-2">
                    <h2 className="text-5xl xs:text-2xl font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal">{toolsProps.title}</h2>
                    <p className="text-[color:var(--clr-body)] text-lg xs:text-sm font-normal">{toolsProps.desc}</p>
                </div>
                <div className="flex flex-row py-5 gap-3 xs:flex-col xs:gap-4">
                    {
                        toolsProps.skills.map(( item,i ) => {
                            return(
                                <div 
                                    className="flex flex-col gap-2 xs:w-full w-2/5" 
                                    key={i}>
                                    <h3 className="font-semibold text-3xl xs:text-xl bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal">{item.titleSkill}</h3>
                                    <p className="text-[color:var(--clr-body)] font-normal text-base xs:text-sm">{item.descSkill}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}