import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "./App.css";
import Home from "@components/Home";
import { GlobalStyle } from "./styles/globalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
