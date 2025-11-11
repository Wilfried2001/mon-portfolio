import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="py-24 ">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="container mx-auto text-center px-4"
      >
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">À propos de <span className="text-cyan-400">moi</span></h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Je suis développeur full-stack web et mobile, passionné par la technologie et la résolution de problèmes. J’aime créer des
            applications web et mobiles modernes, performantes et intuitives. Je travaille avec React, React Native, Node.js et je m'intéresse aux bonnes pratiques
            d'accessibilité et de performance.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">React</span>
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">React Native</span>
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">Node.js</span>
             <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">Spring Boot</span>
              <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">Laravel</span>
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">Tailwind CSS</span>
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">Git</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
