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
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
  font: inherit;
  background: none;
  border: none;
}

html {
  @font-face {
    font-family: SUIT-Regular;
    font-weight: normal;
    font-style: normal;
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Regular.woff2') format('woff2');
}
}

   @media (width >= 410px) and (width <=450px){ 
      font-size: 83%;
    }

    @media (width >= 386px) and (width <=409px){ 
      font-size: 77%;
    }

    @media (width >= 384px) and (width <=385px){ 
      font-size: 75%;
    }

    @media (width >= 371px) and (width <=383px){ 
      font-size: 73%;
    }

    @media (width >=361px) and (width <= 370px){
      font-size: 70%;
    }

    @media (width >=331px) and (width <= 361px){
      font-size: 70%;
   
    }

`;
