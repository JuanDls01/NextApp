import { NavLink } from './NavLink';
import { Disclosure } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi'

export const Pages = () => {
    return (
        <div className="md:w-1/5 lg:w-46 h-screen lg:h-screen ">
            <Disclosure as='nav' className='sm:hidden z-50'>
                <Disclosure.Button className=''>
                    <GiHamburgerMenu className='m-2 md:m-8 h-1/6' />
                </Disclosure.Button>
                <Disclosure.Panel className='z-50'>
                    <div className='m-2 md:m-8 h-1/6'>
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
                    </div>
                </Disclosure.Panel>
        </Disclosure>
            <nav className='hidden sm:flex m-2 md:m-8 h-1/6'>
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