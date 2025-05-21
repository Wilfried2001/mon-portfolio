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
        <h2 className="text-4xl font-bold text-cyan-500 mb-6">Contact</h2>
        <p className=" mb-8">
          Envie de collaborer ou de discuter ? Contacte-moi !
        </p>
        <div className="animate-bounce flex justify-center space-x-8 text-3xl text-cyan-500">
          <a href="https://github.com/Wilfried2001">
            <FaGithub />
          </a>
          <a href=" https://www.linkedin.com/in/wilfried-amougui-dev ">
            <FaLinkedin />
          </a>
          <a href="https://www.yahoo.com/mail/wilfriedamougui@yahoo.com">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/695359269" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="https://t.me/Wizzy237" target="_blank" rel="noopener noreferrer">
        <FaTelegram />
      </a>
      <a href="https://discord.com/users/darkwizzy_" target="_blank" rel="noopener noreferrer">
        <FaDiscord />
      </a>
      <a href="tel:+237695359269">
        <FaPhone />
      </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
