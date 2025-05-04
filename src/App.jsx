import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contacts'
import TechStack from './components/TechStack'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 animate-gradient-x text-white">
      <Navbar />
      <Hero />
      <About />
      <TechStack/>
      <Projects />
      <Contact />
    </div>
  )
}

export default App
