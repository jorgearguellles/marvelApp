import { Nav,Ul,Li,A} from "./styles";

function NavBar(){
  return(
    <Nav>
      <Ul>
        <Li><A href="/">Log In</A></Li>
        <Li><A href="/" >Favoritos</A></Li>
      </Ul>
    </Nav>
  )
};

export default NavBar;