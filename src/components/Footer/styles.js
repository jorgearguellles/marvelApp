import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  height: 3rem;
  border-top: 1px solid white;
  margin-top: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: absolute;
  bottom: 0;
`;

const Text = styled.p`
  font-size: 1.3rem;
  color: ${props => props.whiteText ?  "white" : "#16202A" };
  margin: 0 1rem;
`;

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
  font-size: 1.3rem;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export {Wrapper, Text, Nav,Ul,Li,A};