import Image from 'next/image'
import logoHeader from '../../../../public/favicon.png'

export default function Navbar(){
    return(
        <div>
            <ul className="flex flex-row justify-center items-center text-md mt-23 text-gray-100 bg-transparent mt-6">
                <li className="p-3 mx-3.5 cursor-pointer hover:text-gray-400">
                    <Image
                    src={logoHeader}
                    width={80}
                    height={80}
                    alt='Logo da Nasa'
                    />
                </li>
                <li className="p-3 mx-3.5 cursor-pointer hover:text-gray-400">
                    Pic of the Day
                </li>
                <li className="p-3 mx-3.5 cursor-pointer hover:text-gray-400">
                    Earth Today
                </li>
                <li className="p-3 mx-3.5 cursor-pointer hover:text-gray-400">
                    Pic of Mars Rover
                </li>
            </ul>
        </div>


    )
}