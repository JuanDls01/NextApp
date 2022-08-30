import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Paragragph = ({children}: Props) => {
    return (
        <p className="font-archivo font-medium my-4 md:my-8 text-lg md:text-xl ">
            {children}
        </p>
    )
}