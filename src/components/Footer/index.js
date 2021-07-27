import styled from "styled-components";

const Wrapper = styled.footer`
  width: 130rem;
  height: 3rem;
  border-top: 1px solid white;
  margin: auto;
  margin-top: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #16202A ;
`;

const Text = styled.p`
  font-size: 1.3rem;
  color: white;
  margin: 0 1rem;
`;


function Footer(){
  return(
    <Wrapper>
      <Text>Diseñado y desarrollado por Jorge Arias Argüelles</Text>
      <Text>GitHub</Text>
      <Text>LinkedIn</Text>

    </Wrapper>
  )
};

export default Footer;