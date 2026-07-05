import shared from '../../styles/shared.module.css'
import styles from './ResumeTab.module.css'

const experience = {
  role: 'iOS Developer',
  company: 'Renishaw Metrology Systems Ltd.',
  place: 'Pune, Maharashtra',
  dates: 'Jan 2024 – Present',
  bullets: [
    'Owned architecture and technical direction for 2 native iOS applications, leading design through App Store release with full autonomy over technical decisions.',
    'Architected apps on MVVM with Combine, then migrated critical flows to modern Swift Concurrency (async/await).',
    'Led the migration of 2 apps from UIKit to SwiftUI, modernizing the codebase and setting patterns the team builds on.',
    'Raised product quality 15% by introducing XCTest and XCUITest automation from the ground up.',
    'Built and maintain a reusable UI component library serving as the design-system foundation across apps.',
    'Own the release pipeline end-to-end: provisioning, signing, CI builds, TestFlight and App Store submissions.',
  ],
}

const education = {
  degree: 'B.Tech, Information Technology',
  school: 'Government College of Engineering, Karad',
  dates: 'Jan 2021 – May 2024',
  detail: 'CGPA: 8.71',
}

function ResumeTab() {
  return (
    <div>
      <h1 className={shared.pageHeading}>Resume</h1>

      <h2 className={shared.sectionHeading}>Experience</h2>
      <div className={shared.card}>
        <div className={styles.entryHeader}>
          <h3 className={styles.role}>{experience.role}</h3>
          <span className={styles.dates}>{experience.dates}</span>
        </div>
        <div className={styles.entrySub}>
          <span>{experience.company}</span>
          <span>{experience.place}</span>
        </div>
        <ul className={styles.bullets}>
          {experience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>

      <h2 className={shared.sectionHeading}>Education</h2>
      <div className={shared.card}>
        <div className={styles.entryHeader}>
          <h3 className={styles.role}>{education.degree}</h3>
          <span className={styles.dates}>{education.dates}</span>
        </div>
        <div className={styles.entrySub}>
          <span>{education.school}</span>
          <span>{education.detail}</span>
        </div>
      </div>
    </div>
  )
}

export default ResumeTab
