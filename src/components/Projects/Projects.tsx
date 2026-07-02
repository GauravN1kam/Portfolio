import styles from './Projects.module.css'

interface Project {
  title: string
  description: string
  href: string
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of what this project does and the stack used.',
    href: '#',
  },
  {
    title: 'Project Two',
    description: 'A short description of what this project does and the stack used.',
    href: '#',
  },
  {
    title: 'Project Three',
    description: 'A short description of what this project does and the stack used.',
    href: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <a key={project.title} href={project.href} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Projects
