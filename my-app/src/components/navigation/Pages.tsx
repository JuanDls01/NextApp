import Link from 'next/link';
import {Transition} from '@headlessui/react';
// import { Link } from 'react-scroll' 
import { NavLink } from './NavLink';

export const Pages = () => {
    return (
        <div className="w-1/6 md:w-1/5 h-screen border-r-2">
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>about</a>
                        </Link>
                    </li>
                    <li>
                        <NavLink href='/works' className='text-blue'>
                            works
                        </NavLink>
                    </li>
                    <li>
                        <Link href="/works">
                            <a>works</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume">
                            <a>resume</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}