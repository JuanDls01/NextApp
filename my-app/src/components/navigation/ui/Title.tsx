import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Title = ({children}: Props) => {
    return (
        <h1 className="font-archivo font-black my-4 text-2xl md:text-5xl ">
            {children}
        </h1>
    )
}