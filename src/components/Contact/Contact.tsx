import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Get in Touch</h2>
      <p>
        Feel free to reach out via email or connect on social media.
      </p>
      <div className={styles.links}>
        <a href="mailto:you@example.com">you@example.com</a>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
