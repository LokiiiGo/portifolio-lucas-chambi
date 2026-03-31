const projetos = [
  {
    title: "Blog de Programação",
    description: "Introdução ao Mundo da Programação. Uma plataforma focada em ensinar conceitos básicos para iniciantes.",
    techs: ["HTML", "CSS", "JS", "TailwindCSS"],
    image: "./programacao-blog.png",
    link: "https://github.com/LokiiiGo/programacao-blog",
  },
  {
    title: "Simple Calculator",
    description: "Uma calculadora simples construida com Next.js e estilizada com TailwindCSS, oferecendo uma interface limpa e funcional para operações matemáticas básicas.",
    techs: ["NextJS", "TailwindCSS"],
    image: "./simple-calculator.png",
    link: "https://github.com/LokiiiGo/simple-calculator",
  },
  {
    title: "Stokki Life",
    description: "Gerenciamento de estoque para pequenos negocios, com funcionalidades de cadastro de produtos, controle de estoque e geração de relatórios.",
    techs: ["Laravel", "TailwindCSS", "MySQL"],
    image: "./stokki-life.png",
    link: "https://github.com/stokki-life-tcc",
  },
  {
    title: "Subtrack",
    description: "Aplicativo mobile para gerenciamento de assinaturas, permitindo acompanhar gastos mensais e receber lembretes de vencimento.",
    techs: ["React Native", "Async Storage"],
    image: "./subtrack.png",
    link: "https://github.com/LokiiiGo/SubTrack",
  },
]

const ExternalLinkIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

function Projetos() {
  return (
    <section id="projetos" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 font-bold text-center">
          Meus projetos
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
          {projetos.map((projeto, index) => (
            <article
              key={projeto.title}
              className="group bg-zinc-900 border border-zinc-800 overflow-hidden transition-all duration-300 shadow-xl"
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="lg:w-1/2 overflow-hidden">
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-full min-h-50 lg:min-h-70 bg-linear-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="mx-auto mb-3 rounded-xl bg-black flex items-center justify-center">
                        <img src={projeto.image} alt={projeto.title} className="w-full h-full object-cover" />
                      </div>
                    </div> 
                  </div>
                </div> 

                <div className="p-5 sm:p-6 lg:p-8 lg:w-1/2 flex flex-col justify-center">
                  <ul className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {projeto.techs.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs font-semibold bg-red-500/10 text-red-500 px-2.5 sm:px-3 py-1 rounded-full border border-amber-500/20"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-foreground">
                    {projeto.title}
                  </h3>
                  <p className="text-zinc-100 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    {projeto.description}
                  </p>

                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black inline-flex items-center justify-center gap-2 bg-zinc-100 font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl transition-colors w-fit text-sm sm:text-base"
                  >
                    Ver projeto
                    <ExternalLinkIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos
