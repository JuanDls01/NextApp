import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const ParagragphCard = ({children}: Props) => {
    return (
        <p className="font-archivo font-medium my-1 md:my-2 text-xs md:text-sm">
            {children}
        </p>
    )
}