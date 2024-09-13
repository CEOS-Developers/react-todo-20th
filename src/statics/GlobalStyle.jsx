import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Pretendard;
    font-size: 62.5%;
  }

  @media (min-width: 1000px) {
    body{
      width: 80%;
      margin: 0 auto;
    }
  }

  :root {
  --light-blue: #85b6ff;
  --blue: #458fff;
  }
`;

export default GlobalStyle;
