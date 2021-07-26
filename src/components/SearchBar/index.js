import { Wrapper, ImgSearch, Input, Button} from "./styles.js";
import lupa from "../../img/searchIcon.png";

function SearchBar(props){
  return (
    <Wrapper>
      <ImgSearch src={lupa}/>
      <Input placeholder={props.placeholder}/>
      <Button redBackG whiteText width="14.2rem" height="4.2rem" TextButtom="Buscar" fontWeight="bold" fontSize="3rem" lineHeight="3.5rem">Buscar</Button>
    </Wrapper>
  )
}

export default SearchBar;