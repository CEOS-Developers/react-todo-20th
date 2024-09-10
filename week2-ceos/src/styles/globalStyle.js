import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  font-size: 62.5%
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

button {
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;
}

html {
  @font-face {
      font-family: SUIT;
      font-style: normal;
      font-weight: normal;
      src: url('https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT.css') format('woff2');
  }
}

   //iPhone XR & Galaxy S20 Ultra & A51/71
   @media (min-width: 410px) and (max-width:450px){ 
      font-size: 83%;
    }
    //iPhone 12 Pro
    @media (min-width: 386px) and (max-width:409px){ 
      font-size: 77%;
    }
    //
    @media (min-width: 384px) and (max-width:385px){ 
      font-size: 75%;
    }
    //iPhone SE
    @media (min-width: 371px) and (max-width:383px){ 
      font-size: 73%;
    }
    @media (min-width:361px) and (max-width: 370px){
      font-size: 70%;
    }
    @media (min-width:331px) and (max-width: 361px){
      font-size: 70%;
   
    }

`;
