import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Paragragph = ({children}: Props) => {
    return (
        <p className="font-archivo font-medium mb-4 md:mb-6 text-justify text-sm sm:text-lg md:text-xl xl:text-2xl">
            {children}
        </p>
    )
}