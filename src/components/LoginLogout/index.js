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
`;

const Title = styled.p`
  color: red;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 3rem;
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #16202A;
`;

function LoginLogout(){
  return(
    <Wrapper>
      <Logo src={MarvelLogo}/>
      <WrapperForm>
        <Title>Iniciar Sesión</Title>
        <InputLabel TitleLable="Correo" placeholder="tu_nombre@example.com" for ="correo" id="correo" name="correo" type="email" autocomplete="email"></InputLabel>
        <InputLabel TitleLable="Password" placeholder="tu_passWord_Example" pattern=".{6,}" for="password" id="password" name="password" type="password" autocomplete="password"></InputLabel>
        <Text>Recuperar contraseña</Text>
      </WrapperForm>
    </Wrapper>
  )
};

export default LoginLogout;