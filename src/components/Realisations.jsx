import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const projets = [
  {
    titre: "Platforme E-commerce Wizzy Shop",
    image: "image/project1.png",
    description:
      "Wizzy shop est une application web de E-commerce de vente en ligne de produits associés a un dashboard administrateur fait avec laravel, filament, livewire et tailwindcss.",
    techno: ["Laravel", "Livewire", "Tailwindcss"],
    type: "web",
    lien: "https://github.com/Wilfried2001/Wizzy-Shop",
  },
  {
    titre: "Jon Easy Dashboard",
    image: "image/project2.png",
    description:
      "Dashboard administrateur de Jon Easy fait avec React Js et Tailwindcss.",
    techno: ["React Js", "Tailwindcss"],
    type: "web",
    lien: "https://jon-easy-dashboard.vercel.app/",
  },
  {
    titre: "Ide",
    image: "image/project3.png",
    description: "Editeur de texte en ligne fait avec React Js et Tailwindcss.",
    techno: ["React Js"],
    type: "web",
    lien: "https://react-ide-sigma.vercel.app/",
  },
  {
    titre: "Slider",
    image: "image/project4.png",
    description: "Slider d'image fait avec react Js et Tailwindcss.",
    techno: ["React js", "Tailwind"],
    type: "web",
    lien: "https://react-slider-zeta.vercel.app/",
  },
  {
    titre: "Geodata",
    description:
      "Application qui permet de connaitre toutes les informations de base des pays d'europe et qui consomme une api pour avoir ces informations .",
    image: "image/project5.png",
    techno: ["React js", "Tailwind"],
    type: "web",
    lien: "https://geo-europe-data.vercel.app/",
  },
];

function Realisations() {
  const [filter, setFilter] = useState("all");

  const types = [
    { key: "all", label: "Tous" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
    { key: "desktop", label: "Desktop" },
  ];

  const filtered = useMemo(() => {
    if (filter === "all") return projets;
    return projets.filter((p) => p.type === filter);
  }, [filter]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="text-accent">Mes réalisations</span>
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-8">
          {types.map((t) => (
            <button
              key={t.key}
              onClick={() => setFilter(t.key)}
              className={`px-4 py-2 rounded-full font-medium transition-all focus:outline-accent focus:ring-2 focus:ring-accent ${
                filter === t.key
                  ? "bg-accent text-white shadow-lg"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:scale-105"
              }`}
              aria-pressed={filter === t.key}
            >
              {t.label}
            </button>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((p, i) => (
            <motion.article
              variants={card}
              key={i}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl focus-within:ring-2 focus-within:ring-accent"
              tabIndex={0}
              aria-label={`Projet : ${p.titre}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.titre}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
                  {p.type?.toUpperCase()}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-primary-dark dark:text-primary-light">
                  {p.titre}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3 text-sm">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.techno.map((t) => (
                    <span
                      key={t}
                      className="tech-badge bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline focus:outline-accent"
                  tabIndex={0}
                >
                  Voir le projet <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Realisations;
