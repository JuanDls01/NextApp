import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const TitleCard = ({children}: Props) => {
    return (
        <h1 className="font-archivo font-semibold text-yellow-600 my-1 md:my-2 text-sm md:text-lg">
            {children}
        </h1>
    )
}