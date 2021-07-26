import styled from "styled-components";
import InputLabel from "../InputLabel/index";

import MarvelLogo from "../../img/Marvel_Logo.png";

const Logo = styled.img`
  width: 30rem;
  height: 13rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto; 
  padding: 6rem;
`;

const WrapperForm = styled.form`
  width: 57rem;
  height: 50.3rem;
  margin-top: 3rem;
  padding-top: 4rem;
  border: 1px solid #EC1D23;
  border-radius: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  position: relative;
`;

const Title = styled.p`
  color: red;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 3rem;
`;


const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.redBackG ? "#EC1D23" : "white"};
  border-radius: 50px;
  border-style: ${props => props.borderStyle};
  border-width: ${props => props.borderWidth};
  border-color: ${props => props.borderColor};
  outline: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  text-align: center;
  color: ${props => props.whiteText ?  "white" : "#16202A" };

  &:hover {
    cursor:pointer;
  }
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #16202A;
  position: absolute;
  left: 4rem;
  bottom: 5rem;
  
`;

const WrapperRS = styled.div`
  width: 49rem;
  display: flex;
  justify-content: space-between;
  margin: 2.5rem;
`;



function LoginLogout(){
  return(
    <Wrapper>
      <Logo src={MarvelLogo}/>
      <WrapperForm>
        <Title>Iniciar Sesión</Title>
        <InputLabel TitleLable="Correo" placeholder="tu_nombre@example.com" for ="correo" id="correo" name="correo" type="email" autocomplete="email"></InputLabel>
        <InputLabel TitleLable="Password" placeholder="tu_passWord_Example" pattern=".{6,}" for="password" id="password" name="password" type="password" autocomplete="password"></InputLabel>
        <Button redBackG whiteText borderStyle="none" width="49rem" height="4.2rem" fontWeight="300" fontSize="2.5rem" lineHeight="2.9rem" >Ingresar a Marvel App</Button>
        <WrapperRS>
          <Button width="23rem" height="4.2rem" borderWidth="1px" borderColor="black" fontWeight="Bold" fontSize="1.8rem" lineHeight="2.1rem">Google</Button>
          <Button width="23rem" height="4.2rem" borderWidth="1px" borderColor="black" fontWeight="Bold" fontSize="1.8rem" lineHeight="2.1rem">Facebook</Button>
        </WrapperRS>
        <Text>Recuperar contraseña</Text>
      </WrapperForm>
    </Wrapper>
  )
};

export default LoginLogout;