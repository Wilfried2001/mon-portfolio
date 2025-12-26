import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  const stats = [
    { label: t("about.experience") || "Années d'expérience", value: "2+" },
    { label: t("about.projects") || "Projets réalisés", value: "15+" },
    { label: t("about.clients") || "Clients satisfaits", value: "100%" },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Début de mon journey",
      desc: "Passion pour la tech et débuts en développement web.",
    },
    {
      year: "2023",
      title: "Full-stack web",
      desc: "Maîtrise React, Node.js, bases de données.",
    },
    {
      year: "2024",
      title: "Mobile & performance",
      desc: "Expansion vers React Native, optimisation et déploiement.",
    },
  ];

  return (
    <section id="about" className="py-24 ">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="container mx-auto text-center px-4"
      >
        {/* Stats */}
        <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-800/60 rounded-2xl p-6 shadow-lg"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            À propos de <span className="text-cyan-400">moi</span>
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Je suis développeur full-stack web et mobile, passionné par la
            technologie et la résolution de problèmes. J’aime créer des
            applications web et mobiles modernes, performantes et intuitives. Je
            travaille avec React, React Native, Node.js et je m'intéresse aux
            bonnes pratiques d'accessibilité et de performance.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">
              React
            </span>
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">
              React Native
            </span>
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">
              Node.js
            </span>
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">
              Spring Boot
            </span>
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">
              Laravel
            </span>
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">
              Tailwind CSS
            </span>
            <span className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white">
              Git
            </span>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-accent">Mon Parcours</h3>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-1 h-12 bg-primary/30 mt-2"></div>
                  )}
                </div>
                <div className="text-left pb-6 pt-2">
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
