import styled from "styled-components";

const Nav = styled.nav`
  width: auto;
`;
const Ul = styled.ul`
  width: auto;
  display: felx;
  list-style: none;
`;
const Li = styled.li`
  margin-left: 2rem;

`;
const A = styled.a`
  color: white;
  font-weight: 300;
  font-size: 2.2rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export { Nav,Ul,Li,A};