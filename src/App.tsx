import styles from './App.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'

function App() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
