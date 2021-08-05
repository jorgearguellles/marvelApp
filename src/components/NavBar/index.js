import { Link } from "react-router-dom";
import { Nav,Ul,Li,LinkNavBar} from "./styles";

function NavBar(){
  return(
    <Nav>
      <Ul>
        <Li>
          <Link to="/login" >
            <LinkNavBar whiteText>Log In</LinkNavBar>
          </Link>
        </Li>
        <Li>
          <Link to="/favorites" >
            <LinkNavBar whiteText>Favorites</LinkNavBar>
          </Link>
        </Li>
      </Ul>
    </Nav>
  )
};

export default NavBar;