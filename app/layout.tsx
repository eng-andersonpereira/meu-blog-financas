import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://financassimples.com.br'),
  title: {
    default: 'Finanças Simples — aprenda a cuidar do seu dinheiro',
    template: '%s — Finanças Simples',
  },
  description: 'Dicas práticas de finanças pessoais para brasileiros que querem sair das dívidas e investir melhor',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://financassimples.com.br',
    siteName: 'Finanças Simples',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: 'wJVikXmdBfrm_H_PL3ZTGVfjiJGb6BWriwT6P4HmM24',
    },
  }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={geist.className}>

        <header className="border-b border-gray-200 py-4 px-6">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Link href="/" className="font-bold text-lg text-gray-900">
              Finanças Simples
            </Link>
            <nav className="flex gap-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">Home</Link>
              <Link href="/blog" className="hover:text-gray-900">Blog</Link>
              <Link href="/sobre" className="hover:text-gray-900">Sobre</Link>
            </nav>
          </div>
        </header>

        <main className="max-w-2xl mx-auto px-4 py-10">
          {children}
        </main>

        <footer className="border-t border-gray-200 mt-20 py-8 text-center text-sm text-gray-400">
          © 2026 Finanças Simples · Feito com Next.js
        </footer>

      </body>
    </html>
  )
}