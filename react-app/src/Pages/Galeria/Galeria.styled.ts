import styled from "styled-components";
import Galeria from ".";

const GaleriaStyled = styled(Galeria)`

display: flex;
flex-direction: column;
align-items: center;



.titulo{
    margin: 50px 0 20px 0;
}

h1{
    font-weight: 100;
    font-size: 1em;
    text-align: center;
}

.galeria{
    width: 80vw;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
    justify-items: center;
    justify-content: center; 
    box-sizing: border-box
    
    
}

.galeria img {
    width: 90%;
    object-fit: cover;
    border-radius: 2px;
    padding: 10px;
    box-sizing: border-box;
    
    
}

img:hover {
    width: 100%;
    height: 100%;
    transition: 0.5s;
}

`

export default GaleriaStyled