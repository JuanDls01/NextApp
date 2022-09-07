import { ReactNode } from "react"
import { Button } from "@material-tailwind/react";

type Props = {
    children?: ReactNode,
    link: string
}

export const ButtonRepo = ({children, link}: Props) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Button 
                variant="gradient" 
                ripple={true} 
                className="font-archivo border-2 border-black bg-sky-500 bg-opacity-90 dark:border-white hover:bg-sky-400 py-1 md:py-2 px-2 md:px-4 flex items-center justify-center"
            >
                {children}
            </Button>
        </a>
    )
}