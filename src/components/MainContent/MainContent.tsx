import { useState } from 'react'
import styles from './MainContent.module.css'
import AboutTab from '../tabs/AboutTab'
import ResumeTab from '../tabs/ResumeTab'
import ProjectsTab from '../tabs/ProjectsTab'
import ContactTab from '../tabs/ContactTab'

const tabs = [
  { id: 'about', label: 'About', Panel: AboutTab },
  { id: 'resume', label: 'Resume', Panel: ResumeTab },
  { id: 'projects', label: 'Projects', Panel: ProjectsTab },
  { id: 'contact', label: 'Contact', Panel: ContactTab },
] as const

function MainContent() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('about')
  const ActivePanel = tabs.find((tab) => tab.id === activeTab)!.Panel

  return (
    <main className={styles.main}>
      <nav className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={tab.id === activeTab ? styles.tabActive : styles.tab}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <ActivePanel />
    </main>
  )
}

export default MainContent
