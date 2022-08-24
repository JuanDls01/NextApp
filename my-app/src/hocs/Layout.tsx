import React, { ReactNode } from 'react';

import {Navbar} from '../components/navigation/Navbar'

type Props = {
    children?: ReactNode
}

export const Layout = ({children}: Props) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}
