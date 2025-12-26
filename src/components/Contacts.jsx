import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const statusEl = document.getElementById("contact-status");
    setSending(true);
    statusEl.textContent = t("contact.sending");

    const data = {
      name: (document.getElementById("contact-name") || {}).value,
      email: (document.getElementById("contact-email") || {}).value,
      message: (document.getElementById("contact-message") || {}).value,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        statusEl.textContent = t("contact.success");
        (document.getElementById("contact-form") || {}).reset &&
          document.getElementById("contact-form").reset();
      } else {
        statusEl.textContent = t("contact.error");
      }
    } catch (err) {
      statusEl.textContent = "Erreur réseau. Vérifie ta connexion.";
    } finally {
      setSending(false);
      setTimeout(() => {
        statusEl.textContent = "";
      }, 5000);
    }
  }
  return (
    <section id="contact" className="py-24 ">
      <motion.div
        className="max-w-5xl mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-accent mb-6">
          {t("contact.title")}
        </h2>
        <p className="mb-8 text-lg text-slate-700 dark:text-slate-300">
          {t("contact.description")}
        </p>
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto mb-10 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col gap-4"
          autoComplete="off"
          aria-label="Formulaire de contact"
        >
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder={t("contact.placeholder_name")}
            required
            className="rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent outline-none transition"
            aria-label={t("contact.name")}
          />
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder={t("contact.placeholder_email")}
            required
            className="rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent outline-none transition"
            aria-label={t("contact.email")}
          />
          <textarea
            id="contact-message"
            name="message"
            placeholder={t("contact.placeholder_message")}
            required
            rows={4}
            className="rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent outline-none transition"
            aria-label={t("contact.message")}
          ></textarea>
          <div className="flex items-center gap-4">
            <button
              id="contact-submit"
              type="submit"
              className="bg-primary hover:bg-accent text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 focus:outline-accent focus:ring-2 focus:ring-accent"
              aria-label={t("contact.send")}
            >
              {t("contact.send")}
            </button>
            <div
              id="contact-status"
              role="status"
              aria-live="polite"
              className="text-sm text-slate-600 dark:text-slate-300"
            ></div>
          </div>
        </form>
        <div className="flex flex-wrap justify-center gap-6 text-3xl text-accent mb-2">
          <a
            href="https://github.com/Wilfried2001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary focus:text-primary transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/wilfried-amougui-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary focus:text-primary transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:wilfriedamougui@yahoo.com"
            aria-label="Email"
            className="hover:text-primary focus:text-primary transition-all"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/695359269"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-primary focus:text-primary transition-all"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://t.me/Wizzy237"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="hover:text-primary focus:text-primary transition-all"
          >
            <FaTelegram />
          </a>
          <a
            href="https://discord.com/users/darkwizzy_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="hover:text-primary focus:text-primary transition-all"
          >
            <FaDiscord />
          </a>
          <a
            href="tel:+237695359269"
            aria-label="Téléphone"
            className="hover:text-primary focus:text-primary transition-all"
          >
            <FaPhone />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
