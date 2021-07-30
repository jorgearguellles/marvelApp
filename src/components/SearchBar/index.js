import { Wrapper, ImgSearch, Input} from "./styles.js";
import Button from "../Button/styles";
import lupa from "../../img/searchIcon.png";

function SearchBar(props){
  return (
    <Wrapper>
      <ImgSearch src={lupa}/>
      <Input placeholder={props.placeholder}/>
      <Button redBackG whiteText width="14.2rem" height="3.5rem" TextButtom="Buscar" borderStyle="none" fontWeight="bold" fontSize="2rem" lineHeight="2rem">Buscar</Button>
    </Wrapper>
  )
}

export default SearchBar;