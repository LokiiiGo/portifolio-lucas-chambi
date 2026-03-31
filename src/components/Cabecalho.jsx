"use client"

import { useState } from "react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
]

function Cabecalho() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md px-4 sm:px-6 lg:px-10 py-4 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-white text-xl font-bold">
          LC
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href} className="text-zinc-300">
              <a
                href={link.href}
                className="text-white hover:text-amber-500 text-sm lg:text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-300"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-950/98 backdrop-blur-md border-b border-zinc-800 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={toggleMenu}
                className="text-white block py-3 px-4 hover:bg-zinc-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Cabecalho
