import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
        <div className="flex justify-center space-x-8 text-3xl text-cyan-500">
          <a href="https://github.com/Wilfried2001">
            <FaGithub />
          </a>
          <a href=" https://www.linkedin.com/in/wilfried-amougui-dev ">
            <FaLinkedin />
          </a>
          <a href="https://www.yahoo.com/mail/wilfriedamougui@yahoo.com">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
