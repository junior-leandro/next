import Image from "next/image"
import React from "react"
/*
http://mars-photos.herokuapp.com/api/v1/rovers/Curiosity/photos?earth_date=2023-07-31&camera=fhaz
*/
export default function MarsHover() {
    return (

        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl">Last Photo of Mars Rover&apos;s</h2>
            <div className="flex justify-center items-center w-screen p-10 my-10 gap-2">
               
                <div className="flex flex-col items-center bg-gradient-to-t rounded-3xl from-black to-50%">
                    <Image
                        className="w-1/2 rounded-full"
                        src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
                        width="600"
                        height="600"
                        alt="Sem alt" />
                        <span className="text-sm my-6">Last Photo of Mars Rover | <strong>Opportunity</strong></span>

                </div>
                <div className="flex flex-col items-center bg-gradient-to-t rounded-3xl from-black to-50%">
                    <Image
                        className="w-1/2 rounded-full "
                        src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
                        width="600"
                        height="600"
                        alt="Sem alt" />
                        <span className="text-sm my-6">Last Photo of Mars Rover | <strong>Curiosity</strong></span>

                </div>
                <div className="flex flex-col items-center bg-gradient-to-t rounded-3xl from-black to-50%">
                    <Image
                        className="w-1/2 rounded-full"
                        src="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
                        width="600"
                        height="600"
                        alt="Sem alt" />
                        <span className="text-sm my-6">Last Photo of Mars Rover | <strong>Spirit</strong></span>

                </div>
            </div>
        </div>
       
    )
}