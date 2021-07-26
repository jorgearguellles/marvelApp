import styled from "styled-components";

const Nav = styled.nav``;
const Ul = styled.ul``;
const Li = styled.li``;
const A = styled.a``;


function NavBar(){
  return(
    <Nav>
      <Ul>
        <Li><A>Log In</A></Li>
        <Li><A>Favoritos</A></Li>
      </Ul>
    </Nav>
  )
};

export default NavBar;