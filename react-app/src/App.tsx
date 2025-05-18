import './App.scss'

function App() {
  

  return (
    <>
     <div className='header'>
      <h2> shakal </h2>
      <nav className='menu-principal-header'> 
        <a href="galeria">galeria</a>
        <div className='menu-dropdown-header'>
          <span>trilhas e roteiros</span>
          <ul>
            <li>próximas trilhas</li>
            <li>pacotes</li>
            <li>mapas e dificuldades</li>
            <li>relatos</li>
            <li>checklist</li>
          </ul>
        </div>
       {/* próximas trilhas, relatos, mapas e dificuldades, pacotes de trilhas, depoimentos (quem der um depoimento pode ter um desconto no próximo passeio), checklist de trilha */}
        <a href="audiovisual">audiovisual</a>
        <a href="loja">loja</a>
        <a href="contato">contato</a>
      </nav>
     </div>
    </>
  )
}

export default App
