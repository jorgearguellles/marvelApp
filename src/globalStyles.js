import { createGlobalStyle } from "styled-components";

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

export default Global;