import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Paragragph = ({children}: Props) => {
    return (
        <p className="font-archivo font-medium mb-2 md:mb-4 text-justify text-sm sm:text-lg md:text-xl xl:text-2xl">
            {children}
        </p>
    )
}