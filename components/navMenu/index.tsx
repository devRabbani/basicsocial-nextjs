'use client'

import Link from 'next/link'
import styles from './navMenu.module.css'
import { SignInButton, SignOutButton } from '../buttons'
import AuthCheck from '../AuthCheck'

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} href={'/'}>
        BasicSocial
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  )
}
