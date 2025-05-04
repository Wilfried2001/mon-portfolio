import { motion } from 'framer-motion'

function Projects() {
  const projects = [
    { title: 'Projet 1', description: 'Description rapide du projet réalisé.', imgSrc: 'https://via.placeholder.com/400x200' },
    { title: 'Projet 2', description: 'Une autre description de projet.', imgSrc: 'https://via.placeholder.com/400x200' },
    { title: 'Projet 3', description: 'Encore un autre projet intéressant.', imgSrc: 'https://via.placeholder.com/400x200' },
    { title: 'Projet 4', description: 'Voici un projet supplémentaire.', imgSrc: 'https://via.placeholder.com/400x200' },
    // Ajoutez d'autres projets ici
  ]

  return (
    <section id="projects" className="py-24">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      >
        <h2 className="text-4xl font-bold text-center text-cyan-500 mb-12">Mes Projets</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={project.imgSrc} alt={project.title} />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a href="#" className="text-cyan-500 font-bold hover:underline">Voir le projet</a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
