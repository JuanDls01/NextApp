import Image, { StaticImageData } from "next/image"

type Props = {
    src: StaticImageData
}

export const TechLogo = ({src}: Props) => {
    return (
        <div className="h-5/6 w-5/6
            bg-transparent
            
            dark:border-white 
            flex justify-center items-center"
        >
            <Image src={src} className='h-1/4 w-1/4'/>
        </div>
        
    )
}