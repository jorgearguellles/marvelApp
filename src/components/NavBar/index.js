import { Link } from "react-router-dom";
import { Nav,Ul,Li,LinkNavBar} from "./styles";

function NavBar(){

  const linkStyle = {
    textDecoration: "none"
  }

  return(
    <Nav>
      <Ul>
        <Li>
          <Link to="/login" style={linkStyle}>
            <LinkNavBar whiteText>Log In</LinkNavBar>
          </Link>
        </Li>
        <Li>
          <Link to="/favorites" style={linkStyle}>
            <LinkNavBar whiteText>Favorites</LinkNavBar>
          </Link>
        </Li>
      </Ul>
    </Nav>
  )
};

export default NavBar;