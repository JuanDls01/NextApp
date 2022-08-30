import Link from 'next/link';
// import {Transition} from '@headlessui/react';
// import { Link } from 'react-scroll' 
import { NavLink } from './NavLink';
import { useRouter } from 'next/router';

export const Pages = () => {
    const {asPath} = useRouter()
    return (
        <div className="w-1/6 md:w-1/5 h-screen border-r-2">
            <nav className='m-2 md:m-8 h-1/6'>
                <ul className='h-full flex flex-col justify-between'>
                    <li className=''>
                        <NavLink href='/'>
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href='/works'>
                            works
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/resume">
                            resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/contact">
                            contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}