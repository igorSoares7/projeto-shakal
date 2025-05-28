import galeria from '../../assets/images/galeria.jpg'

interface className{
    className?:any
}


const Galeria = ({className}:className) => {
    return (
        <div className={className}>
            <div className="titulo">
            <h1>galeria de fotos</h1>
            </div>
            <div className="galeria">
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
                <div className='box-img'>
                    <img src={galeria}  />
                </div>
            
        
                 
                    
            </div>

        </div>
        
    )
}

export default Galeria