import { useState, useEffect } from "react";
import env from "react-dotenv";
import Home from "./pages/Home/index";
import Global from "./globalStyles";
import LoginLogout from "./pages/LoginLogout";

function App() {
  const [characters, setCharacters] = useState({});

  useEffect(
    () => {
      fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${env.API_KEY}&hash=${env.HASH}`)
        .then((response) => response.json())
        .then((data => setCharacters(data.data.results)));
    },[])

    console.log(characters);

  return (
    <>
      <Global />
      <Home />
      <LoginLogout />
    </>
  );
}

export default App;
