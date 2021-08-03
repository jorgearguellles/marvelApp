import InputLabel from "../../components/InputLabel/index";
import Button from "../../components/Button/styles";
import MarvelLogo from "../../img/Marvel_Logo.png";

import {Logo, Wrapper, WrapperForm, WrapperRS, Title, Text, TextSignUp} from "./styles";

function SignUp(){
  return(
    <Wrapper>
      <Logo src={MarvelLogo}/>
      <WrapperForm>
        <Title>Sign Up</Title>
        <InputLabel TitleLable="Email" placeholder="example@email.com" for ="correo" id="correo" name="correo" type="email" autocomplete="email"></InputLabel>
        <InputLabel TitleLable="Password" placeholder="passwordExample" for="password" id="password" name="password" type="password" autocomplete="password"></InputLabel>
        <InputLabel TitleLable="Password Confirmation" placeholder="passwordExampleConfirmation" for="password" id="password" name="password" type="password" autocomplete="password"></InputLabel>
        <Button redBackG whiteText borderStyle="none" width="100%" height="3rem" fontWeight="300" fontSize="2rem" lineHeight="2.5rem" >Sign Up</Button>
        <WrapperRS>
          <Button width="23rem" height="3rem" borderWidth="1px" borderColor="black" fontWeight="Bold" fontSize="1.8rem" lineHeight="2rem">Google</Button>
          <Button width="23rem" height="3rem" borderWidth="1px" borderColor="black" fontWeight="Bold" fontSize="1.8rem" lineHeight="2rem">Facebook</Button>
        </WrapperRS>
      </WrapperForm>
        <TextSignUp>Already have an Account? Log In</TextSignUp>
    </Wrapper>
  )
};

export default SignUp;