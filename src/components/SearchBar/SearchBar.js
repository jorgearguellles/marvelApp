import { Wrapper, ImgSearch, Input, Button} from "./styles.js";
import lupa from "../../img/searchIcon.png";

function SearchBar(props){
  return (
    <Wrapper>
      <ImgSearch src={lupa}/>
      <Input placeholder={props.placeholder}/>
      <Button>Buscar</Button>
    </Wrapper>
  )
}

export default SearchBar;