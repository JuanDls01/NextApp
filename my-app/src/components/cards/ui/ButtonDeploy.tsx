import { ReactNode } from "react"
import { Button } from "@material-tailwind/react";

type Props = {
    children?: ReactNode,
    link: string
}

export const ButtonDeploy = ({children, link}: Props) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Button 
                variant="gradient" 
                ripple={true} 
                className={`font-archivo text-black hover:bg-gray-100 py-1 md:py-2 px-2 md:px-4 flex items-center justify-center ${link === 'Not yet'? 'cursor-not-allowed': null}`}
            >
                {children}
            </Button>
        </a>
    )
}