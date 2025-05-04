import { motion } from 'framer-motion'

function TechStack() {
  return (
    <section id="tech-stack" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          Technologies <span className="text-cyan-400">utilisées</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Tech item animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="tech-item flex flex-col items-center"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg"
              alt="React"
              className="w-16 h-16 mb-4"
            />
            <span className="text-xl font-semibold">React</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="tech-item flex flex-col items-center"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/laravel.svg"
              alt="Laravel"
              className="w-16 h-16 mb-4"
            />
            <span className="text-xl font-semibold">Laravel</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="tech-item flex flex-col items-center"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mysql.svg"
              alt="MySQL"
              className="w-16 h-16 mb-4"
            />
            <span className="text-xl font-semibold">MySQL</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="tech-item flex flex-col items-center"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/tailwindcss.svg"
              alt="Tailwind CSS"
              className="w-16 h-16 mb-4"
            />
            <span className="text-xl font-semibold">Tailwind CSS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="tech-item flex flex-col items-center"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/javascript.svg"
              alt="JavaScript"
              className="w-16 h-16 mb-4"
            />
            <span className="text-xl font-semibold">JavaScript</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="tech-item flex flex-col items-center"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/html5.svg"
              alt="HTML5"
              className="w-16 h-16 mb-4"
            />
            <span className="text-xl font-semibold">HTML5</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="tech-item flex flex-col items-center"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/css3.svg"
              alt="CSS3"
              className="w-16 h-16 mb-4"
            />
            <span className="text-xl font-semibold">CSS3</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="tech-item flex flex-col items-center"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/git.svg"
              alt="Git"
              className="w-16 h-16 mb-4"
            />
            <span className="text-xl font-semibold">Git</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
