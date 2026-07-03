import styles from './Projects.module.css'

interface Project {
  title: string
  description: string
  href: string
  tags: string[]
}

const iosProjects: Project[] = [
  {
    title: 'BBQuotes',
    description:
      'A SwiftUI app that fetches Breaking Bad characters and quotes from a REST API, with detail views for each character and their fate.',
    href: 'https://github.com/GauravN1kam/BBQuotesApp',
    tags: ['Swift', 'SwiftUI'],
  },
  {
    title: 'JPApexPredators',
    description:
      'A SwiftUI app cataloging Jurassic Park apex predators, with detail pages and an interactive MapKit view of their locations.',
    href: 'https://github.com/GauravN1kam/JPApexPredators',
    tags: ['Swift', 'SwiftUI', 'MapKit'],
  },
  {
    title: 'LOTR Coin Converter',
    description:
      'A SwiftUI currency converter themed around Middle-earth currencies, with live exchange rates and an icon-based currency picker.',
    href: 'https://github.com/GauravN1kam/LordOfTheRingsCoinsConverter',
    tags: ['Swift', 'SwiftUI'],
  },
]

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>

      <h3 className={styles.subheading}>iOS Apps</h3>
      <div className={styles.grid}>
        {iosProjects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
