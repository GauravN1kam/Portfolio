import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <h1>Hi, I'm Your Name</h1>
      <p className={styles.subtitle}>
        I build things for the web. Software engineer focused on frontend and
        product.
      </p>
      <div className={styles.actions}>
        <a className={styles.primary} href="#projects">
          View Projects
        </a>
        <a className={styles.secondary} href="#contact">
          Get in Touch
        </a>
      </div>
    </section>
  )
}

export default Hero
