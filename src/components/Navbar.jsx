import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";

function Navbar({ theme, toggleTheme }) {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed w-full top-0 z-50 transition-all backdrop-blur-sm bg-opacity-40 ${
        scrolled ? "bg-white/10 dark:bg-black/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-slate-900 dark:text-white">
        <img src="image/Logo.png" alt="" className="w-16 h-16" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#about"
            className="text-slate-800 dark:text-white hover:text-cyan-500 transition"
          >
            {t("navbar.about")}
          </a>
          <a
            href="#tech-stack"
            className="text-slate-800 dark:text-white hover:text-cyan-500 transition"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="text-slate-800 dark:text-white hover:text-cyan-500 transition"
          >
            {t("navbar.projects")}
          </a>
          <a
            href="#contact"
            className="text-slate-800 dark:text-white hover:text-cyan-500 transition"
          >
            {t("navbar.contact")}
          </a>
          <LanguageToggle />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:opacity-90 transition"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:opacity-90 transition text-slate-800 dark:text-white"
          >
            {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-white/60 dark:bg-black/40 backdrop-blur-sm">
          <a
            href="#about"
            className="block py-2 text-slate-800 dark:text-white hover:text-cyan-500"
          >
            {t("navbar.about")}
          </a>
          <a
            href="#tech-stack"
            className="block py-2 text-slate-800 dark:text-white hover:text-cyan-500"
          >
            Technologies
          </a>
          <a
            href="#projects"
            className="block py-2 text-slate-800 dark:text-white hover:text-cyan-500"
          >
            {t("navbar.projects")}
          </a>
          <a
            href="#contact"
            className="block py-2 text-slate-800 dark:text-white hover:text-cyan-500"
          >
            {t("navbar.contact")}
          </a>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
