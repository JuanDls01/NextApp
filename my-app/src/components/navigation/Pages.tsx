import { NavLink } from './NavLink';

export const Pages = () => {
    return (
        <div className="w-1/6 md:w-1/5 lg:w-46 h-screen lg:h-screen">
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