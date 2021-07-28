import { useState, useEffect } from "react";
import env from "react-dotenv";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home/index";



const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    /* Fonts */
    font-size: 62.5%; /* 1 rem === 10px */
    font-family: "Roboto", sans-serif;
    background-color: #16202A ;
    color: white;
  }
`;

// const API_KEY = "1a10e24232e5d8541a1fafd20690d17e";
// const HASH = "68cf490a1bf1fd3b9fa556dd99e6914b";

function App() {
  const [characters, setCharacters] = useState({});

  useEffect(
    () => {
      fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${env.API_KEY}&hash=${env.HASH}`)
        .then((response) => response.json())
        .then((data => setCharacters(data)));
    },[])

    console.log(characters);
    console.log(window.env);

  return (
    <>
      <Global />
      <Home />
    </>
  );
}

export default App;
