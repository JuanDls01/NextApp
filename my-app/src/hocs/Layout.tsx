import React, { ReactNode } from 'react';

import {Navbar} from '../components/navigation/Navbar';
import { Pages } from '../components/navigation/Pages';

type Props = {
    children?: ReactNode
}

export const Layout = ({children}: Props) => {
    return (
        <div className='h-auto'>
            <Navbar />
            <div className='flex w-full h-auto'>
                <Pages />
                {children}
            </div>
        </div>
    )
}
