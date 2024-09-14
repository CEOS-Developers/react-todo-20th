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
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
  }

  button {
  border: none;
  background-color: transparent;
  }

  input {
  width: 70%;
  border: transparent;
  color: var(--light-blue);
  }

  input:focus {
  outline: none;
  }

  @media screen and (max-width: 41.875rem) {
  input {
    width: 60%;
  }
}

  :root {
  --light-blue: #85b6ff;
  --blue: #458fff;
  }
`;

export default GlobalStyle;
