import Image from "next/image"
import React from "react"


export default function EarthToday() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl">Photo of Earth Today</h2>
            <div className="flex justify-center items-center w-screen p-10">
                <div className="w-1/2">
                    
                </div>
                <div className="w-1/2 flex flex-col items-center">
                    <Image
                        className="rounded-full w-1/2"
                        src="https://epic.gsfc.nasa.gov/archive/natural/2023/07/21/jpg/epic_1b_20230721034335.jpg"
                        width="600"
                        height="600"
                        alt="Sem alt" />
                        <span className="text-xs">This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft</span>

                </div>
            </div>
        </div>
    )
}

// https://epic.gsfc.nasa.gov/archive/natural/2023/07/21/jpg/epic_1b_20230721002713.jpg
