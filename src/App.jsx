import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Realisations from "./components/Realisations";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import TechStack from "./components/TechStack";
import Loader from "./components/Loader";

function App() {
  // Initial theme: localStorage -> prefers-color-scheme -> light
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
        return "dark";
    } catch (e) {}
    return "light";
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Observe sections and add `in-view` class when they enter the viewport (simple reveal animation)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 dark:bg-gradient-to-br dark:from-slate-900 dark:via-zinc-900 dark:to-slate-800 dark:text-white">
      {loading && <Loader />}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <TechStack />
      <Realisations />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;
