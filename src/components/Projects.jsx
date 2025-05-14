import { motion } from "framer-motion";
import { link } from "framer-motion/client";

function Projects() {
  const projects = [
    {
      title: "Wizzy Shop",
      description:
        "Wizzy shop est une application web de E-commerce de vente en ligne de produits associés a un dashboard administrateur fait avec laravel, filament, livewire et tailwindcss.",
      imgSrc: "image/project1.png",
      link: "https://github.com/Wilfried2001/Wizzy-Shop",
    },
    {
      title: "Jon Easy Dashboard",
      description: "Dashboard administrateur de Jon Easy fait avec React Js et Tailwindcss .",
      imgSrc: "image/project2.png",
      link: "https://jon-easy-dashboard.vercel.app/",
    },
    {
      title: "Ide",
      description: "Editeur de texte en ligne fait avec React Js et Tailwindcss .",
      imgSrc: "image/project3.png",
      link: "https://react-ide-sigma.vercel.app/",
    },
    {
      title: "Slider",
      description: "Slider d'image fait avec react Js et Tailwindcss .",
      imgSrc: "image/project4.png",
      link: "https://react-slider-zeta.vercel.app/",
    },
     {
      title: "Geodata",
      description: "Application qui permet de connaitre toutes les informations de base des pays d'europe .",
      imgSrc: "image/project5.png",
      link: "https://geo-europe-data.vercel.app/",
    },
    // Ajoutez d'autres projets ici
  ];

  return (
    <section id="projects" className="py-">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <h2 className="text-4xl font-bold text-center text-cyan-500 mb-12">
          Mes Projets
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src={project.imgSrc} alt={project.title} />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
               <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 font-bold hover:underline"
                >
                  Voir le projet
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
