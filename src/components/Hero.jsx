import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import TechStack from "./TechStack";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="py-24 flex flex-col md:flex-row items-center justify-center  px-6 "
      >
        {/* Partie photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 flex justify-center mt-10 md:mt-0"
        >
          <img
            src="public/image/photo.jpeg" // <-- Mets ici ton chemin d'image
            alt=""
            className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Partie texte */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg mb-4">
            Salut, je suis <span className="text-cyan-400">Wizzy Dev</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium mb-6">
            <Typewriter
              words={[
                "Développeur Web & Mobile",
                "Créateur de solutions innovantes",
                "Passionné par l'UX et les nouvelles technos",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
          <a
            href="#projects"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-transform hover:scale-105"
          >
            Voir mes projets
          </a>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
