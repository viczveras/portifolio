// Remova esta linha se não estiver usando o Image
// import Image from 'next/image'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-slate-900 flex flex-col">
      <div className="fixed top-0 left-0 w-full bg-emerald-400 h-1"></div>
      <main className="flex-1 container mx-auto px-4 py-16 flex flex-col items-center justify-center gap-16">
        <div className="w-full max-w-6xl bg-white/5 backdrop-blur-sm rounded-lg p-8">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
      <footer className="w-full border-t border-gray-700/30 bg-white/5 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-8">
          <a
            className="hover:text-gray-300 transition-colors duration-300 text-sm"
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn
          </a>
          <span className="text-gray-400">•</span>
          <a
            className="hover:text-gray-300 transition-colors duration-300 text-sm"
            href="https://vercel.com/templates"
            target="_blank"
            rel="noopener noreferrer"
          >
            Examples
          </a>
          <span className="text-gray-400">•</span>
          <a
            className="hover:text-gray-300 transition-colors duration-300 text-sm"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to nextjs.org →
          </a>
        </div>
      </footer>
    </div>
  )
}
