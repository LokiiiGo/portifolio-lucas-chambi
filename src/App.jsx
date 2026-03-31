import './App.css'
import Cabecalho from './components/Cabecalho'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <div className="oswald">
        <Cabecalho />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
        <Rodape />
      </div>
    </>
  )
}

export default App