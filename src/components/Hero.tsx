'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="mb-16 flex justify-center">
          <div className="relative w-48 h-48 hover:scale-105 transition-transform duration-300">
            <Image
              src="/avatar.jpg"
              alt="Sua foto"
              fill
              className="rounded-full object-cover border-4 border-emerald-500/30 shadow-lg shadow-emerald-500/20"
            />
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-8 text-white">
           Hello World, me chamo <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">Victor Véras!</span>
        </h2>
        <h3 className="text-1xl sm:text-1xl font-bold mb-12 bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
          Software Developer | AWS Cloud Architect | Machine Learning Enthusiast.
        </h3>
        <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Transformando ideias em soluções digitais com código limpo e tecnologias modernas.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <button
            onClick={scrollToProjects}
            className="inline-block px-8 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-white rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-emerald-500/20"
          >
            Conheça meu trabalho
          </button>
        </motion.div>
        
        <div className="mt-20">
          <div className="w-full max-w-4xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}