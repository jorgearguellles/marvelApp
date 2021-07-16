import { Wrapper, ImgSearch, Input, Button} from "./Styles.js";

function SearchBar(props){
  return (
    <Wrapper>
      <ImgSearch src={props.searchIcon}/>
      <Input placeholder={props.placeholder}/>
      <Button>Buscar</Button>
    </Wrapper>
  )
}

export default SearchBar;