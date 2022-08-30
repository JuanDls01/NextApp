import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Title = ({children}: Props) => {
    return (
        <h1 className="font-archivo font-black text-2xl md:text-3xl ">
            {children}
        </h1>
    )
}