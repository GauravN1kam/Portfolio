import shared from '../../styles/shared.module.css'
import styles from './AboutTab.module.css'

const whatIDo = [
  {
    title: 'iOS App Development',
    description: 'Native apps in Swift and SwiftUI, from architecture through App Store release.',
  },
  {
    title: 'UIKit → SwiftUI Migration',
    description: 'Modernizing legacy codebases into SwiftUI while cutting boilerplate.',
  },
  {
    title: 'Testing & Automation',
    description: 'XCTest and XCUITest coverage baked into the development workflow.',
  },
  {
    title: 'CI/CD & Release',
    description: 'Provisioning, signing, and shipping through TestFlight and the App Store.',
  },
]

const skills = [
  'Swift', 'SwiftUI', 'UIKit', 'Combine', 'MapKit',
  'SwiftData', 'MVVM', 'XCTest', 'Xcode', 'Git',
	'Jira', 'Kotlin', '.Net', 'WPF'
]

function AboutTab() {
  return (
    <div>
      <h1 className={shared.pageHeading}>About Me</h1>
      <p className={styles.paragraph}>
        iOS Developer building native apps with Swift, SwiftUI, and Objective-C. Skilled in
        MVVM, UIKit-to-SwiftUI migration, reusable design systems, and XCTest automation, with a
        focus on clean architecture and polished, guideline-compliant UX.
      </p>
      <p className={styles.paragraph}>
        Currently at Renishaw Metrology Systems, leading the technical design of two iOS
        applications end to end — from architecture to App Store release.
      </p>

      <h2 className={shared.sectionHeading}>What I'm Doing</h2>
      <div className={shared.grid}>
        {whatIDo.map((item) => (
          <div key={item.title} className={shared.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className={shared.sectionHeading}>Skills</h2>
      <ul className={shared.chips}>
        {skills.map((skill) => (
          <li key={skill} className={shared.chip}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AboutTab
