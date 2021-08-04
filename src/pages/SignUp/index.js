import { useRef } from "react";
import { useAuth } from "../../context/AuthContext";

import InputLabel from "../../components/InputLabel/index";
import Button from "../../components/Button/styles";
import MarvelLogo from "../../img/Marvel_Logo.png";

import {Logo, Wrapper, WrapperForm, WrapperRS, Title, TextSignUp} from "./styles";

function SignUp(){
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event){
    event.preventDefault()

    if(passwordRef.current.value !== passwordConfirmationRef.current.value){
       return setError("Password do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError( "Failed to create an account")
    }
    setLoading(false);
  }

  return(
    
      <Wrapper>
        <Logo src={MarvelLogo}/>
        <WrapperForm onSubmit={handleSubmit}>
          <Title>Sign Up</Title>
          <InputLabel TitleLable="Email" placeholder="example@email.com" for="email" id="email" name="email" type="email" autocomplete="email" ref={emailRef} required ></InputLabel>
          <InputLabel TitleLable="Password" placeholder="passwordExample" for="password" id="password" name="password" type="password" autocomplete="password" ref={passwordRef} required></InputLabel>
          <InputLabel TitleLable="Password Confirmation" placeholder="passwordConfirmation" for="password" id="password" name="password" type="password" autocomplete="password" ref={passwordConfirmationRef} required></InputLabel>
          <Button disable={loading} redBackG whiteText borderStyle="none" width="100%" height="3rem" fontWeight="300" fontSize="2rem" lineHeight="2rem" >Sign Up</Button>
          <WrapperRS>
            <Button width="47%" max-width="20rem" height="3rem" borderWidth="1px" borderColor="black" fontWeight="Bold" fontSize="1.8rem" lineHeight="2rem">Google</Button>
            <Button width="47%" max-width="20rem" height="3rem" borderWidth="1px" borderColor="black" fontWeight="Bold" fontSize="1.8rem" lineHeight="2rem">Facebook</Button>
          </WrapperRS>
        </WrapperForm>
          <TextSignUp>Already have an Account? Log In</TextSignUp>
      </Wrapper>
  
  )
};

export default SignUp;