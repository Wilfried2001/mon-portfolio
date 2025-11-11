import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp, FaTelegram, FaDiscord } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 ">
      <motion.div
        className="max-w-5xl mx-auto px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-accent mb-6">Contact</h2>
        <p className="mb-8 text-lg text-slate-700 dark:text-slate-300">
          Envie de collaborer ou de discuter ? Contacte-moi !
        </p>
        <form className="max-w-xl mx-auto mb-10 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col gap-4" autoComplete="off" aria-label="Formulaire de contact">
          <input type="text" name="name" placeholder="Nom" required className="rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent outline-none transition" aria-label="Nom" />
          <input type="email" name="email" placeholder="Email" required className="rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent outline-none transition" aria-label="Email" />
          <textarea name="message" placeholder="Votre message..." required rows={4} className="rounded-lg px-4 py-3 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-accent outline-none transition" aria-label="Message"></textarea>
          <button type="submit" className="bg-primary hover:bg-accent text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all hover:scale-105 focus:outline-accent focus:ring-2 focus:ring-accent" aria-label="Envoyer le message">
            Envoyer
          </button>
        </form>
        <div className="flex flex-wrap justify-center gap-6 text-3xl text-accent mb-2">
          <a href="https://github.com/Wilfried2001" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary focus:text-primary transition-all"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/wilfried-amougui-dev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary focus:text-primary transition-all"><FaLinkedin /></a>
          <a href="mailto:wilfriedamougui@yahoo.com" aria-label="Email" className="hover:text-primary focus:text-primary transition-all"><FaEnvelope /></a>
          <a href="https://wa.me/695359269" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-primary focus:text-primary transition-all"><FaWhatsapp /></a>
          <a href="https://t.me/Wizzy237" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-primary focus:text-primary transition-all"><FaTelegram /></a>
          <a href="https://discord.com/users/darkwizzy_" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="hover:text-primary focus:text-primary transition-all"><FaDiscord /></a>
          <a href="tel:+237695359269" aria-label="Téléphone" className="hover:text-primary focus:text-primary transition-all"><FaPhone /></a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
