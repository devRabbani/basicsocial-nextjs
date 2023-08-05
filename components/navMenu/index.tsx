import Link from 'next/link'
import styles from './navMenu.module.css'
import Image from 'next/image'

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
      </ul>
    </nav>
  )
}
