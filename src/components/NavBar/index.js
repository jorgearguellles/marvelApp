import { Nav,Ul,Li,A} from "./styles";

function NavBar(props){
  return(
    <Nav>
      <Ul>
        <Li><A href={props.href1} whiteText target={props.target1}>{props.link1}</A></Li>
        <Li><A href={props.href2} whiteText target={props.target2}>{props.link2}</A></Li>
      </Ul>
    </Nav>
  )
};

export default NavBar;