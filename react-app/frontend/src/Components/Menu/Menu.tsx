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
                    <Link to='/'><a>home</a></Link>
                    <Link to="/galeria">galeria</Link>
                    <Link to="/reservas">reservas</Link>
                    
                    {/* próximas trilhas, relatos, mapas e dificuldades, pacotes de trilhas, depoimentos (quem der um depoimento pode ter um desconto no próximo passeio), checklist de trilha */}
                    <Link to='/loja'>loja</Link>
                    <Link to='/contato'>contato</Link>
                </nav>
            </div>
        </div>
    )
}

export default Menu