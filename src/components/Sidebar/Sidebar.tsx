import styles from './Sidebar.module.css'

const contactFields = [
  { label: 'Email', value: 'workwithgauravpn@gmail.com', href: 'mailto:workwithgauravpn@gmail.com' },
  { label: 'Phone', value: '+91 820-814-0007', href: 'tel:+918208140007' },
  { label: 'Location', value: 'Pune, Maharashtra', href: undefined },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/GauravN1kam',
    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.238-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.09-.647.35-1.088.636-1.339-2.221-.253-4.555-1.114-4.555-4.957 0-1.095.39-1.991 1.03-2.694-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.029A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.3 2.747-1.03 2.747-1.03.546 1.379.202 2.398.1 2.651.64.703 1.028 1.599 1.028 2.694 0 3.852-2.338 4.7-4.566 4.948.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/gauravn1kam',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z',
  },
]

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.avatar} aria-hidden="true">
        GN
      </div>
      <h1 className={styles.name}>Gaurav Nikam</h1>
      <span className={styles.badge}>iOS Developer</span>

      <div className={styles.divider} />

      <h2 className={styles.heading}>Contact</h2>
      <dl className={styles.fields}>
        {contactFields.map((field) => (
          <div key={field.label} className={styles.field}>
            <dt>{field.label}</dt>
            <dd>
              {field.href ? <a href={field.href}>{field.value}</a> : field.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className={styles.socials}>
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className={styles.social}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d={social.path} />
            </svg>
          </a>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
