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
  color: ${props => props.whiteText ?  "white" : "#16202A" };
  font-weight: 300;
  font-size: 2.2rem;
  text-decoration: none;
  padding: 0.5rem 2rem;
  border-radius: 5rem;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export { Nav,Ul,Li,A};