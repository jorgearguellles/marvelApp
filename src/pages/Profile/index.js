import { useState } from "react";
import Button from "../../components/Button/styles";
import MarvelLogo from "../../img/Marvel_Logo.png";
import { useAuth } from "../../context/AuthContext";

import {Wrapper, WrapperInfo, Title, Logo} from "./styles";

export default function Profile() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  function handleLogout(){

  }

  return (
    <Wrapper>
      <Logo src={MarvelLogo}/>
      <WrapperInfo>
        <Title>Profile</Title>
        {error && <ErrorText>{error}</ErrorText>}
        {/* <strong>Email:</strong>{currentUser.email} */}
      </WrapperInfo>
      <Button onClick={handleLogout} redBackG whiteText borderStyle="none" width="15%" height="3.5rem" fontWeight="300" fontSize="2rem" lineHeight="2rem">Log Out</Button>
    </Wrapper>
  )
}
