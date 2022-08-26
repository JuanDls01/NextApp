import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ReactNode } from 'react';

type propTypes = {
    href: string
    exact?: boolean
    children: ReactNode
    className: string
};


export const NavLink = ({ href, exact, children, ...props }: propTypes) => {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);

    if (isActive) {
        props.className += ' active';
    }

    return (
        <Link href={href}>
            <a {...props}>
                {children}
            </a>
        </Link>
    );
}