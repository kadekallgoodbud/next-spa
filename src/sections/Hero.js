import Image from "next/image"
import { Button } from "@mui/material"


export default function Hero({...data}) {
    return(
        <>
            <div className="container w-full min-h-full pt-36 pb-8 mx-auto">
                <h2 className="text-6xl text-center font-bold">
                    {data.name}
                </h2>
            </div>
        </>
    )
}