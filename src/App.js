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

function App() {
  return (
    <>
      <Global />
      <Home />
    </>
  );
}

export default App;
