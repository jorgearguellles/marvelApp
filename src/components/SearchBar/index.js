import { Wrapper, ImgSearch, Input} from "./styles.js";
import lupa from "../../img/searchIcon.png";
import Buttom from "../Buttom/index";

function SearchBar(props){
  return (
    <Wrapper>
      <ImgSearch src={lupa}/>
      <Input placeholder={props.placeholder}/>
      <Buttom TextButtom="Buscar"></Buttom>
    </Wrapper>
  )
}

export default SearchBar;