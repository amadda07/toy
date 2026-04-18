import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import PublicProjects from './components/PublicProjects'
import AllProjects from './components/AllProjects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div style={{ backgroundColor: '#050d1a', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <PublicProjects />
      <AllProjects />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

export default App
