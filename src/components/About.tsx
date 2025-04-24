'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="max-w-2xl mx-auto">
          
          <h2 className="text-3xl font-bold mb-8 text-white">
            Sobre mim
            

             
          <p></p>
          </h2>
          <p className="text-gray-300">
            Sou um desenvolvedor de software em início de carreira, atualmente cursando
            Sistemas para Internet pelo Instituto Federal de Educação da Paraíba. Apaixonado por tecnologia e sempre em busca de
            novos desafios, estou constantemente aprendendo e me desenvolvendo na área.
            Entusiasta das áreas de Cloud Computing, IA e Ciência de Dados.
          </p>
        </div>
      </motion.div>
    </section>
  )
}