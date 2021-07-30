import SearchBar from "../SearchBar/index";
import NavBar from "../NavBar/index";
import {Wrapper, LogoImg} from "./styles.js";
import MarvelLogo from "../../img/Marvel_Logo.png";

function Header(){
  return (
    <Wrapper>
      <LogoImg src={MarvelLogo} />
      <SearchBar placeholder="Busca a tu súper héroe favorito"/>
      <NavBar link1="Log In" link2="Favoritos" />
    </Wrapper>
  )
}

export default Header;