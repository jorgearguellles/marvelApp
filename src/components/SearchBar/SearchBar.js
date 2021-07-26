import { Wrapper, ImgSearch, Input, Button} from "./styles.js";
import lupa from "../../img/searchIcon.png";
import Buttom from "../Buttom/index";

const width = "3rem";

function SearchBar(props){
  return (
    <Wrapper>
      <ImgSearch src={lupa}/>
      <Input placeholder={props.placeholder}/>
      <Buttom width="14.2rem" height="42" fontWeight="" fontSize="" lineHeight="" color="white" TextButtom="Buscar"></Buttom>
    </Wrapper>
  )
}

export default SearchBar;