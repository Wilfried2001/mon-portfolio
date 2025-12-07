import { FaExternalLinkAlt } from "react-icons/fa";

const projets = [
  {
    titre: "Platforme E-commerce Wizzy Shop",
    image: "image/project1.png",
    description:
      "Wizzy shop est une application web de E-commerce de vente en ligne de produits associés a un dashboard administrateur fait avec laravel, filament, livewire et tailwindcss.",
    techno: ["Laravel", "Livewire", "Tailwindcss"],
    lien: "https://github.com/Wilfried2001/Wizzy-Shop",
  },
  {
    titre: "Jon Easy Dashboard",
    image: "image/project2.png",
    description:
      "Dashboard administrateur de Jon Easy fait avec React Js et Tailwindcss.",
    techno: ["React Js", "Tailwindcss"],
    lien: "https://jon-easy-dashboard.vercel.app/",
  },
  {
    titre: "Ide",
    image: "image/project3.png",
    description: "Editeur de texte en ligne fait avec React Js et Tailwindcss.",
    techno: ["React Js"],
    lien: "https://react-ide-sigma.vercel.app/",
  },
  {
    titre: "Slider",
    image: "image/project4.png",
    description: "Slider d'image fait avec react Js et Tailwindcss.",
    techno: ["React js", "Tailwind"],
    lien: "https://react-slider-zeta.vercel.app/",
  },
  {
    titre: "Geodata",
    description:
      "Application qui permet de connaitre toutes les informations de base des pays d'europe et qui consomme une api pour avoir ces informations .",
    image: "image/project5.png",
    techno: ["React js", "Tailwind"],
    lien: "https://geo-europe-data.vercel.app/",
  },
];

function Realisations() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="text-accent">Mes réalisations</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projets.map((p, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl focus-within:ring-2 focus-within:ring-accent"
              tabIndex={0}
              aria-label={`Projet : ${p.titre}`}
            >
              <img
                src={p.image}
                alt={p.titre}
                loading="lazy"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 tech-logo"
              />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Realisations;
