import styled from "styled-components";
import Menu from "./Menu";

const MenuStyled = styled(Menu)`
.header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu-principal-header{
  display: flex;
  gap: 25px;
  flex-direction: row;
  justify-content: center;
  height: 100px;
  
}

a{
  text-decoration: none;
  color: gray;
}

`

export default MenuStyled