import InputLabel from "../../components/InputLabel/index";
import MarvelLogo from "../../img/Marvel_Logo.png";

import {Logo, Wrapper, WrapperForm, WrapperRS, Title, Button, Text} from "./styles";

function LoginLogout(){
  return(
    <Wrapper>
      <Logo src={MarvelLogo}/>
      <WrapperForm>
        <Title>Iniciar Sesión</Title>
        <InputLabel TitleLable="Correo" placeholder="example@email.com" for ="correo" id="correo" name="correo" type="email" autocomplete="email"></InputLabel>
        <InputLabel TitleLable="Password" placeholder="NombreApellido123!" for="password" id="password" name="password" type="password" autocomplete="password"></InputLabel>
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