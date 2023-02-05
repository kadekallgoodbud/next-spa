import React from 'react'
import { data } from "../data/data"

export default function About({}) {
    const AboutProps = {
        title: (data.about.title),
        desc: (data.about.desc),
    }

    return(
        <>
            <div className='container w-3/5 mx-auto '>
                <div className='m-auto text-left flex flex-col space-y-3 '>
                    <h2 className='text-4xl font-semibold text-[color:var(--clr-body)] '>{AboutProps.title}</h2>
                    <p className='text-lg font-normal text-[color:var(--clr-body)]'>{AboutProps.desc}</p>
                </div>
                <div>

                </div>
            </div>
        </>
    )

}