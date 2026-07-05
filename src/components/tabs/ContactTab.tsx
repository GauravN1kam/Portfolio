import shared from '../../styles/shared.module.css'
import styles from './ContactTab.module.css'

const links = [
  { label: 'workwithgauravpn@gmail.com', href: 'mailto:workwithgauravpn@gmail.com' },
  { label: 'GitHub — GauravN1kam', href: 'https://github.com/GauravN1kam' },
  { label: 'LinkedIn — gauravn1kam', href: 'https://linkedin.com/in/gauravn1kam' },
]

function ContactTab() {
  return (
    <div>
      <h1 className={shared.pageHeading}>Contact</h1>
      <p className={styles.paragraph}>
        Open to Senior iOS opportunities and interesting mobile projects. Feel free to reach
        out — happy to talk architecture, SwiftUI, or your product roadmap.
      </p>
      <div className={shared.card}>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ContactTab
