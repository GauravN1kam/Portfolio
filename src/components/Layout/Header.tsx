import styles from './Header.module.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Header() {
  return (
    <header className={styles.header}>
      <a href="#top" className={styles.logo}>
        Your Name
      </a>
      <nav className={styles.nav}>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
