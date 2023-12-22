'use client'

import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import Link from 'next/link'

import classes from './index.module.scss'
import { HeaderNav } from '../Nav'
import { noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import { CartLink } from '../../CartLink'
import { useAuth } from '../../../_providers/Auth'
import Image from 'next/image'
const HeaderComponent = ({ header }: { header: Header }) => {
    const pathname = usePathname()
    const { user } = useAuth()

    return (
        <nav className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide].filter(Boolean).join(' ')}>
            <Gutter className={classes.wrap}>
                <Link href='/'>
                    {/* <h2 className={classes.logo}>Logo</h2> */}
                    <Image src='/logo-black.svg' alt='logo' width={200} height={36} />
                </Link>

                <HeaderNav header={header} />
            </Gutter>
        </nav>
    )
}

export default HeaderComponent
