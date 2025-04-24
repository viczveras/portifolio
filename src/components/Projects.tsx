'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "BeeLinks",
      description: "Projeto final da disciplina Linguagens de Marcação, com foco em HTML e CSS e TailwindCSS",
      image: "/projeto1.png",
      tech: ["HTML", "TailWindCSS"],
      link: "https://tkroger15.github.io/beelink3v/"
    },
    {
      title: "BluePost",
      description: "BluePost é uma plataforma de compartilhamento de imagens desenvolvida com Flask, permitindo que usuários criem contas, façam login e compartilhem suas fotos em um ambiente moderno e intuitivo.",
      image: "/projeto2.png",
      tech: ["Python", "Flask", "Html", "TailWindCSS", "JavaScript", "SQLite"],
      link: "https://github.com/viczveras/project_site/"
    },
    {
      title: "Projeto 3",
      description: "------------",
      image: "/placeholder-project.jpg",
      tech: ["Awaiting", "Awaiting", "Awaiting"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">
          Meus Projetos
        </h2>
        <p className="text-gray-300">
          Confira alguns dos projetos que desenvolvi
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver projeto →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}