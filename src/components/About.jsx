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
        <h2 className="text-3xl font-bold mb-4">À propos de <span className="text-cyan-400">moi</span></h2>
        
        <p className="text-lg max-w-2xl mx-auto">
          Je suis développeur full-stack, passionné par la technologie et la résolution de problèmes. J’aime créer des
          applications web et mobiles modernes, performantes et intuitives.
        </p>
      </motion.div>
    </section>
  )
}

export default About
