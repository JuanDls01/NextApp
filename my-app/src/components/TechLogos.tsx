import { StaticImageData } from 'next/image';
import {technologies} from '../data/technologies';
import Image from 'next/image'

type technologie = {
    id: number,
    name: string,
    image: StaticImageData
}

export const TechLogos = () => {
    return (
        <div className='flex justify-center items-center grid grid-cols-4 md:grid-cols-6 '>
            {
                technologies && technologies.map((technologie: technologie) => {
                    return(
                        <div key={technologie.id} className='w-8 h-8 md:w-16 md:h-16 m-1 md:m-3 border-2 border-black rounded-sm flex items-center justify-center bg-white transition hover:shadow-[-3px_3px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:-translate-y-1'>
                            <Image src={technologie.image} className='object-scale-down scale-75 md:scale-100' width={30} height={30} />
                        </div>
                    )
                })
            }
        </div>
    )
}