"use client"

import { useState } from "react"

const navLinks = [
  { href: "#home", label: "Home", },
  { href: "#sobre", label: "Sobre", },
  { href: "#habilidades", label: "Habilidades", },
  { href: "#projetos", label: "Projetos", },
  { href: "#contato", label: "Contato", },
]

function Cabecalho() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/98 backdrop-blur-md px-4 sm:px-6 lg:px-10 py-4 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-white text-xl font-bold">
          <img src="./assets/icone-portifolio.png" alt="ícone de portífolio" className="w-10 h-10" />
        </a>

        {/* Navegação no Desktop*/}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href} className=" text-zinc-300">
              <a
                href={link.href}
                className="text-white hover:text-zinc-300 text-sm lg:text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão de menu no mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-300"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Navegação no mobile */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-950/98 backdrop-blur-md border-b border-zinc-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
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
