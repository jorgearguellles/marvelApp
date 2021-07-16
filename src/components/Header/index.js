import SearchBar from "../SearchBar/SearchBar";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 144.0rem;
  height: 8rem;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6.7rem;
`;
const LogoText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 59px;
`;

const searchIcon = "../../img/searchIcon.png";

function Header(){
  return (
    <Wrapper>
      <LogoText>Marvel App</LogoText>
      <SearchBar src={searchIcon} placeholder="Busca a tu súper heroe favorito"/>
    </Wrapper>
  )
}

export default Header;