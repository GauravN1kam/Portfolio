import shared from '../../styles/shared.module.css'
import styles from './ProjectsTab.module.css'

interface Project {
  title: string
  description: string
  href: string
  tags: string[]
}

const projects: Project[] = [
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

function ProjectsTab() {
  return (
    <div>
      <h1 className={shared.pageHeading}>Projects</h1>
      <div className={shared.grid}>
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={`${shared.card} ${styles.projectCard}`}
          >
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={shared.chips}>
              {project.tags.map((tag) => (
                <li key={tag} className={shared.chip}>
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProjectsTab
