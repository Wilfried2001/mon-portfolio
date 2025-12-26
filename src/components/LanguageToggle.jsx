import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const languages = [
    { code: "fr", flag: "🇫🇷", label: "Français" },
    { code: "en", flag: "🇬🇧", label: "English" },
  ];

  return (
    <div className="flex gap-1 items-center bg-slate-100 dark:bg-slate-700 rounded-full p-1">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          whileTap={{ scale: 0.95 }}
          className={`px-2 py-1 text-lg rounded-full transition-all focus:outline-accent focus:ring-2 focus:ring-accent ${
            currentLanguage === lang.code
              ? "bg-accent text-white shadow-lg"
              : "hover:bg-slate-200 dark:hover:bg-slate-600"
          }`}
          aria-pressed={currentLanguage === lang.code}
          title={lang.label}
        >
          {lang.flag}
        </motion.button>
      ))}
    </div>
  );
}

export default LanguageToggle;
