import img from '../../assets/images/img.jpg';
import pordosol from '../../assets/images/pordosol.jpg';


interface className {
    className?: any
}

const Home = ({ className }: className) => {
    return (
        <div className={className}>
            <div className='box-top'>
                <img className='img-principal' src={img} alt="imagem principal" />
                <div className='titulo'>
                <h2>
                    Quando a <span className="underline">aventura</span> se torna <span className="underline">imagem</span>
                </h2>
                <p>Shakal Carlos é fotógrafo, guia turístico e agente cultural atuante na Zona da Mata Mineira, unindo paixão por imagens, aventura e cultura local.</p>
                <img className='por-do-sol' src={pordosol} alt="por do sol" width={600}/>
                </div>
            </div>
        </div>
    );
};

export default Home;