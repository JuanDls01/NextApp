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
        <div className='flex justify-center items-center grid grid-cols-6'>
            {
                technologies && technologies.map((technologie: technologie) => {
                    return(
                        <div className='w-16 h-16 m-3 border-2 border-black rounded-md flex items-center justify-center bg-white'>
                            <Image key={technologie.id} src={technologie.image} className='object-scale-down' width={30} height={30} />
                        </div>
                    )
                })
            }
        </div>
    )
}