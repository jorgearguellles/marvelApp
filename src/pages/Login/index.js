import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import {Label, Text, Input} from "../../components/InputLabel/styles";
import Button from "../../components/Button/styles";
import MarvelLogo from "../../img/Marvel_Logo.png";
import {Logo, Wrapper, WrapperForm, WrapperRS, ErrorText,Title, TextSignUp, LinkText} from "./styles";

function Login(){
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError( "Failed to Log In")
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
          <Title>Log In</Title>
          {error && <ErrorText>{error}</ErrorText>}
          <Label>
            <Text>Email</Text>
            <Input ref={emailRef} placeholder="example@email.com" id="email" name="email" type="email" autocomplete="email" required/>
          </Label>
          <Label>
            <Text>Password</Text>
            <Input ref={passwordRef} placeholder="ExamplePassword" id="password" name="password" type="password" autocomplete="password" required/>
          </Label>
          <Button disabled={loading} redBackG whiteText borderStyle="none" width="100%" height="3.5rem" fontWeight="300" fontSize="2rem" lineHeight="2rem" >Log In</Button>
          <WrapperRS>
            <Button width="47%" max-width="20rem" height="3.5rem" borderWidth="1px" borderColor="black" fontWeight="Bold" fontSize="1.8rem" lineHeight="2rem">Google</Button>
            <Button width="47%" max-width="20rem" height="3.5rem" borderWidth="1px" borderColor="black" fontWeight="Bold" fontSize="1.8rem" lineHeight="2rem">Facebook</Button>
          </WrapperRS>
        </WrapperForm>
          <TextSignUp>Need an Account?
            <Link to="/signup" style={linkStyle}>
              <LinkText>Sign Up</LinkText>
            </Link>
          </TextSignUp>
      </Wrapper>
  )
};

export default Login;