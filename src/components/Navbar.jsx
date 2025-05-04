import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed w-full top-0 z-50 transition-all ${
        scrolled
          ? 'bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 animate-gradient-x'
          : 'bg-transparent'
      }`}
      
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <h1 className="text-3xl font-bold text-white shadow-lg hover:shadow-2xl transition duration-300">Wilfried</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-cyan-500 transition">À propos</a>
          <a href="#tech-stack" className="hover:text-cyan-500 transition">Technologies</a>
          <a href="#projects" className="hover:text-cyan-500 transition">Projets</a>
          <a href="#contact" className="hover:text-cyan-500 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 animate-gradient-x p-4 text-white">
          <a href="#about" className="block py-2 hover:text-cyan-500">À propos</a>
          <a href="#tech-stack" className="block py-2 hover:text-cyan-500">Technologies</a>
          <a href="#projects" className="block py-2 hover:text-cyan-500">Projets</a>
          <a href="#contact" className="block py-2 hover:text-cyan-500">Contact</a>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
