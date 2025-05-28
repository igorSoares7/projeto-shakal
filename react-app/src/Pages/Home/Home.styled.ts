import styled from "styled-components";
import Home from ".";

const HomeStyled = styled(Home)`

display: flex;
.box-top{
    display: flex;
    margin-top: 50px;
    max-width: 600px;
  
    
}
.titulo{
    position: relative;
    z-index: 1;
    left: 735px;
    top: 50px;
    font-family: 'Inter';
    font-weight:250;
    h2{
        font-family: 'Inter';
        font-weight:250;
    }
    p{
       padding-left: 100px;
       padding-top: 40px;       
    }
}
.underline{
    border-bottom: 2px solid black;
    padding-bottom: 5px;
}
.img-principal{
    left: 100px;
    position: absolute;
    z-index: 0;
}

.por-do-sol{
    position: absolute;
    left: 100px;
    top: 300px;
    padding-bottom: 20px;
}

img {
    border-radius: 1.5px;
}








`

export default HomeStyled

