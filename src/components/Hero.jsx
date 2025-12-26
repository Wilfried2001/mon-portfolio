import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";
import TechStack from "./TechStack";
import {
  FaReact,
  FaMobileAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLaravel,
  FaDownload,
} from "react-icons/fa";

function SpringIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M12 2C8.7 2 6 4.7 6 8c0 1.9.9 3.6 2.3 4.7-.2.5-.3 1-.3 1.6 0 2.8 2.2 5 5 5s5-2.2 5-5c0-3.3-2.7-6-6-6-.6 0-1.1.1-1.6.3C13.4 8.9 15 7 15 5c0-1.7-1.3-3-3-3z"
      />
      <path
        fill="currentColor"
        d="M9 12c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z"
      />
    </svg>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="home"
        className="py-24 flex flex-col md:flex-row items-center justify-center px-6"
      >
        {/* Partie photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0"
        >
          <div className="relative group">
            <picture>
              <source srcSet="/image/photo.jpeg" type="image/webp" />
              <img
                src="image/photo.jpeg"
                alt="Wizzy Dev"
                loading="lazy"
                className="w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover shadow-2xl ring-2 ring-slate-200 dark:ring-slate-700 transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
                tabIndex={0}
              />
            </picture>
            {/* Halo animé */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full scale-110 opacity-0 group-hover:opacity-80 group-focus:opacity-80 transition-all duration-300 bg-gradient-to-br from-primary via-accent to-teal-400 blur-2xl z-0"
            ></span>
          </div>
        </motion.div>

        {/* Partie texte */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-2/3 text-center md:text-left mt-6 md:mt-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3">
            {t("hero.greeting")}{" "}
            <span className="text-cyan-400">{t("hero.title")}</span>
          </h1>
          <div className="mb-4 text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium">
            {t("hero.role")}
          </div>
          {/* Encart technique */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
            <span className="tech-badge bg-primary-light dark:bg-slate-700 text-primary-dark dark:text-primary-light focus:outline-accent transition-all">
              <FaReact className="text-tech-react" title="React" />
              {t("tech.react")}
            </span>
            <span className="tech-badge bg-accent-light dark:bg-accent-dark text-accent-dark dark:text-accent-light focus:outline-accent transition-all">
              <FaMobileAlt className="text-accent" title="Mobile" />
              {t("tech.mobile")}
            </span>
            <span className="tech-badge bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200 focus:outline-accent transition-all">
              <SpringIcon className="inline-block mr-2 text-green-600" />
              {t("tech.springBoot")}
            </span>
            <span className="tech-badge bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 focus:outline-accent transition-all">
              <FaNodeJs className="text-tech-node" title="Node.js" />
              {t("tech.nodejs")}
            </span>
            <span className="tech-badge bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200 focus:outline-accent transition-all">
              <FaLaravel className="text-orange-500" title="Laravel" />
              Laravel
            </span>

            <span className="tech-badge bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-accent transition-all">
              <FaGithub className="" title="GitHub" />
              {t("tech.github")}
            </span>
          </div>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium mb-6">
            <Typewriter
              words={[
                t("hero.profession"),
                t("hero.backendLover"),
                t("hero.innovator"),
                t("hero.passionate"),
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-block bg-primary hover:bg-accent text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 focus:outline-accent focus:ring-2 focus:ring-accent"
              tabIndex={0}
            >
              {t("hero.viewProjects")}
            </a>

            <a
              href="#contact"
              className="inline-block border border-accent text-accent font-semibold py-3 px-6 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-accent hover:text-white focus:outline-accent focus:ring-2 focus:ring-accent"
              tabIndex={0}
            >
              {t("hero.contact")}
            </a>

            <a
              href="doc/CV_Amougui.pdf"
              download
              className="inline-flex items-center gap-2 bg-accent hover:bg-primary text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 focus:outline-accent focus:ring-2 focus:ring-primary"
              tabIndex={0}
            >
              <FaDownload /> {t("hero.downloadCV")}
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
