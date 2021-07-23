import SearchBar from "../SearchBar/SearchBar";
import {Wrapper, LogoText} from "./styles.js";

function Header(){
  return (
    <Wrapper>
      <LogoText>Marvel App</LogoText>
      <SearchBar placeholder="Busca a tu súper heroe favorito"/>
    </Wrapper>
  )
}

export default Header;