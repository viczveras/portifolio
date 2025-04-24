'use client'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">
            Entre em Contato
          </h2>
          <p className="text-gray-300 mb-12">
            Interessado em trabalhar juntos? Me encontre nas redes sociais!
          </p>
          <div className="flex flex-col items-center gap-12">
            <div className="grid grid-cols-4 gap-10 w-full max-w-md">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/victorveras1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4"
              >
                <span className="text-4xl text-white/80 hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
                <span className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                  LinkedIn
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/viczveras/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4"
              >
                <span className="text-4xl text-white/80 hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                <span className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                  GitHub
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://x.com/victorverasx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4"
              >
                <span className="text-4xl text-white/80 hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
                <span className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                  Twitter
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/verasvictor1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4"
              >
                <span className="text-4xl text-white/80 hover:text-white transition-colors duration-300">
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
                <span className="text-sm text-gray-300 hover:text-white transition-colors duration-300">
                  Instagram
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}