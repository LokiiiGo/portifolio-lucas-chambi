
const habilidades = [
  {
    icon: (
      <img src="./assets/html.png" alt="HTML5" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "HTML5",
    description: "Marcação semântica e organização acessível de conteúdo para melhor SEO.",
    color: "amber",
  },
  {
    icon: (
      <img src="./assets/react.png" alt="React" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "React",
    description: "Interfaces componentizadas, hooks e gerenciamento de estado eficiente.",
    color: "blue",
  },
  {
    icon: (
      <img src="./assets/css.png" alt="css3" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "CSS3",
    description: "Estilização avancada com layouts flexiveis, animações e design responsivo.",
    color: "blue",
  },
  {
    icon: (
      <img src="./assets/js.png" alt="JavaScript" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "JavaScript",
    description: "Interatividade com manipulação do DOM, eventos e criação de efeitos dinâmicos.",
    color: "amber",
  },
  {
    icon: (
      <img src="./assets/tailwindcss.png" alt="tailwindcss" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "TailwindCSS",
    description: "Estilização rapida e eficiente com classes utilitárias, responsividade e temas customizáveis.",
    color: "cyan",
  },
  {
    icon: (
      <img src="./assets/nextjs-icon.png" alt="Next.js" className="w-6 h-6 sm:w-8 sm:h-8" />
    ),
    title: "Next.js",
    description: "Desenvolvimento full-stack com React, SSR, SSG e roteamento baseado em arquivos.",
    color: "white",
  },
]

const colorVariants = {
  amber: {
    border: "hover:border-amber-500/50",
    bg: "bg-amber-500/10",
    text: "text-amber-500",
  },
  blue: {
    border: "hover:border-blue-500/50",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
  cyan: {
    border: "hover:border-cyan-500/50",
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
  },
  white: {
    border: "hover:border-zinc-400/50",
    bg: "bg-zinc-500/10",
    text: "text-foreground",
  },
}

function Habilidades() {
  return (
    <div className="text-white">
      {/* Sobre Mim */}
      <section id="sobre" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">Sobre mim</h2>

        <article className="bg-zinc-900 border border-zinc-700/30 text-left sm:text-justify p-6 sm:p-8 rounded-xl max-w-3xl shadow-xl">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300">
            Sou freelancer web com foco em{" "}
            <span className="text-white font-semibold">front-end</span> na criação de interfaces
            modernas, responsivas e orientadas a experiência do usuário.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300 mt-4">
            Recentemente, desenvolvi uma API com operações CRUD para gerenciamento de estoque e
            streaming, aplicando boas práticas de organização de código e integração entre front e
            back-end. Ofereço soluções de alta qualidade para potencializar seu projeto.
          </p>
        </article>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 text-center">
          Minhas habilidades
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {habilidades.map((hab) => {
            const colors = colorVariants[hab.color] || colorVariants.white

            return (
              <div
                key={hab.title}
                className={`bg-zinc-900 border border-zinc-800 p-5 sm:p-6 rounded-xl flex flex-col items-center text-center transition-colors ${colors.border}`}
              >
                <div className={`${colors.bg} p-3 sm:p-4 rounded-full mb-3 sm:mb-4 ${colors.text}`}>
                  {hab.icon}
                </div>
                <h3 className={`font-bold text-lg sm:text-xl mb-2 ${colors.text}`}>{hab.title}</h3>
                <p className="text-zinc-400 text-sm sm:text-base">{hab.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Habilidades
