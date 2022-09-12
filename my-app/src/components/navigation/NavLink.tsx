import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

import { useRouter } from 'next/router'

interface Props extends LinkProps {
  children: ReactNode
}
const styleLinkActive = 'font-archivo font-bold text-base md:text-lg xl:text-xl'
const styleLinkNotActive = 'text-gray-500 font-archivo font-bold text-sm md:text-base hover:underline hover:underline-offset-2 xl:text-xl'

export const NavLink = ({ href, children}: Props) => {
  const { asPath } = useRouter()
  return (
    <Link href={href}>
      <a className={asPath === href? styleLinkActive: styleLinkNotActive}>
        {children}
      </a>
    </Link>
  )
}