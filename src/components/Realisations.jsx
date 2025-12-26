import {
  FaExternalLinkAlt,
  FaMobileAlt,
  FaDesktop,
  FaServer,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";

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
  {
    titre: "Crud spring boot avec thymeleaf",
    image: "image/project6.png",
    description:
      "Application de CRUD avec springboot et le moteur de template thymeleaf.",
    techno: ["SpringBoot", "Java", "MySQL"],
    type: "web",
    lien: "https://github.com/Wilfried2001/spring-crud-with-thymeleaf.git",
  },
  {
    titre: "TravelMate Mobile",
    image: "image/project8.png",
    description:
      "Application mobile de voyages (itinéraires, cartes, réservations) faite avec React Native et Expo.",
    techno: ["React Native", "Expo"],
    type: "mobile",
    lien: "https://expo.dev/",
  },
  {
    titre: "DeskNotes",
    image: "image/project7.png",
    description:
      "Application desktop de prise de notes (Electron + React) avec synchronisation locale.",
    techno: ["Electron", "React"],
    type: "desktop",
    lien: "https://github.com/Wilfried2001/DeskNotes",
  },

  {
    titre: "API SpringBoot - Auth",
    image: "image/project9.png",
    description:
      "Microservice d'authentification en Spring Boot (JWT), endpoints sécurisés pour login/register.",
    techno: ["Spring Boot", "Java", "JWT"],
    type: "backend",
    lien: "https://github.com/Wilfried2001/spring-auth-api",
  },
  {
    titre: "API Laravel - CRUD",
    image: "image/project10.png",
    description:
      "API backend construite avec Laravel pour gérer ressources et logique métier, consommée par un frontend SPA.",
    techno: ["Laravel", "PHP", "MySQL"],
    type: "backend",
    lien: "https://github.com/Wilfried2001/laravel-api",
  },
];

function Realisations() {
  const { t } = useTranslation();
  const allowedFilters = ["all", "web", "mobile", "desktop", "backend"];
  const [filter, setFilter] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const f = params.get("filter");
      if (f && allowedFilters.includes(f)) return f;
    } catch (e) {}
    return "all";
  });

  const types = [
    { key: "all", label: t("projects.all") },
    { key: "web", label: t("projects.web") },
    { key: "mobile", label: t("projects.mobile") },
    { key: "desktop", label: t("projects.desktop") },
    { key: "backend", label: t("projects.backend") },
  ];

  const filtered = useMemo(() => {
    if (filter === "all") return projets;
    return projets.filter((p) => p.type === filter);
  }, [filter]);

  // sync filter -> query param (so ?filter=backend works and is shareable)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (filter === "all") {
        params.delete("filter");
      } else {
        params.set("filter", filter);
      }
      const newQuery = params.toString();
      const newUrl = newQuery
        ? `${window.location.pathname}?${newQuery}`
        : window.location.pathname;
      window.history.replaceState(null, "", newUrl);
    } catch (e) {
      // ignore
    }
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
          <span className="text-accent">{t("projects.title")}</span>
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-8 relative">
          {types.map((typeItem) => (
            <motion.button
              key={typeItem.key}
              onClick={() => setFilter(typeItem.key)}
              whileTap={{ scale: 0.98 }}
              className={`relative px-4 py-2 rounded-full font-medium transition-all focus:outline-accent focus:ring-2 focus:ring-accent overflow-hidden`}
              aria-pressed={filter === typeItem.key}
            >
              <span className="relative z-10 text-sm md:text-base">
                {typeItem.key === "mobile" ? (
                  <>
                    <FaMobileAlt className="inline mr-2" /> {typeItem.label}
                  </>
                ) : typeItem.key === "desktop" ? (
                  <>
                    <FaDesktop className="inline mr-2" /> {typeItem.label}
                  </>
                ) : typeItem.key === "backend" ? (
                  <>
                    <FaServer className="inline mr-2" /> {typeItem.label}
                  </>
                ) : (
                  typeItem.label
                )}
              </span>

              {filter === t.key && (
                <motion.span
                  layoutId="filterActive"
                  className="absolute inset-0 rounded-full bg-accent/95 shadow-lg z-0"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
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
                {p.type === "backend" && (
                  <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-md shadow-md">
                    {t("projects.apiBadge")}
                  </span>
                )}
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
                  {t("projects.viewProject")}{" "}
                  <FaExternalLinkAlt className="text-xs" />
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
