import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meu Portfólio - Desenvolvedor de Software',
  description: 'Portfólio profissional com projetos e experiências em desenvolvimento de software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  )
}
