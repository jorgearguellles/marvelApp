import {Wrapper, Text, Nav, Ul, Li, A} from "./styles";

function Footer(){
  return(
    <Wrapper>
      <Text >Diseñado y desarrollado por Jorge Arias Argüelles</Text>
      <Nav>
        <Ul>
          <Li>
            <A href="https://www.figma.com/file/5zrM3hi6nHS9WfQr1kgoLl/Strong-Dangerous?node-id=1408%3A298"  target="_blank">
              <img src="https://www.vectorlogo.zone/logos/figma/figma-ar21.svg" width="60rem" height="30rem" alt="figma"/>
            </A>
          </Li>
          <Li>
            <A href="https://github.com/jorgearguellles"  target="_blank">
              <img src="https://www.vectorlogo.zone/logos/github/github-ar21.svg" width="60rem" height="30rem" alt="github"/>
            </A>
          </Li>
          <Li>
            <A href="https://www.linkedin.com/in/jorgeariasarguelles/"  target="_blank">
              <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg" width="60rem" height="30rem" alt="linkedIn"/>
            </A>
          </Li>
        </Ul>
    </Nav>
    </Wrapper>
  )
};

export default Footer;