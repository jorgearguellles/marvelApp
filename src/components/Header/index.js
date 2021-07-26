import SearchBar from "../SearchBar/index";
import {Wrapper, LogoImg} from "./styles.js";
import MarvelLogo from "../../img/Marvel_Logo.png";

function Header(){
  return (
    <Wrapper>
      <LogoImg src={MarvelLogo} />
      <SearchBar placeholder="Busca a tu súper héroe favorito"/>
    </Wrapper>
  )
}

export default Header;