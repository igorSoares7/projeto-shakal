import { Link } from "react-router-dom"

interface className {
    className?: any
}

const Menu = ({ className }: className) => {
    return (
        <div className={className}>
            <div className='header'>
                <h2> shakal </h2>
                <nav className='menu-principal-header'>
                    <Link to='/'>home</Link>
                   <Link to="/galeria">galeria</Link>
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
                    <Link to='/audiovisual'>audiovisual</Link>
                    <Link to='/loja'>loja</Link>
                    <Link to='/contato'>contato</Link>
                </nav>
            </div>
        </div>
    )
}

export default Menu