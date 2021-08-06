import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {Label, Text, Input} from "../../components/InputLabel/styles";
import Button from "../../components/Button/styles";
import MarvelLogo from "../../img/Marvel_Logo.png";
import {Logo, Wrapper, WrapperForm, WrapperRS, ErrorText,Title, TextSignUp, LinkText} from "./styles";



function SignUp(){
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmationRef.current.value){
       return setError("Password do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError( "Failed to create an account")
    }
    setLoading(false);
  }

  const linkStyle = {
    textDecoration: "none"
  }

  return(
      <Wrapper>
        <Logo src={MarvelLogo}/>
        <WrapperForm onSubmit={handleSubmit}>
          <Title>Sign Up</Title>
          {error && <ErrorText>{error}</ErrorText>}
          <Label>
            <Text>Email</Text>
            <Input ref={emailRef} placeholder="example@email.com" id="email" name="email" type="email" autocomplete="email" required/>
          </Label>
          <Label>
            <Text>Password</Text>
            <Input ref={passwordRef} placeholder="ExamplePassword" id="password" name="password" type="password" autocomplete="password" required/>
          </Label>
          <Label>
            <Text>Password Confirmation</Text>
            <Input ref={passwordConfirmationRef} placeholder="PasswordConfirmation" id="passwordConfirmation" name="passwordConfirmation" type="password" autocomplete="password" required/>
          </Label>
          <Button disabled={loading} redBackG whiteText borderStyle="none" width="100%" height="3.5rem" fontWeight="300" fontSize="2rem" lineHeight="2rem" >Sign Up</Button>
          <WrapperRS>
            <Button width="47%" max-width="20rem" height="3.5rem" borderWidth="1px" borderColor="black" fontWeight="Bold" fontSize="1.8rem" lineHeight="2rem">Google</Button>
            <Button width="47%" max-width="20rem" height="3.5rem" borderWidth="1px" borderColor="black" fontWeight="Bold" fontSize="1.8rem" lineHeight="2rem">Facebook</Button>
          </WrapperRS>
        </WrapperForm>
          <TextSignUp>Already have an Account?
            <Link to="/login" style={linkStyle} >
              <LinkText>Log In</LinkText>
            </Link>
          </TextSignUp>
      </Wrapper>
  )
};

export default SignUp;