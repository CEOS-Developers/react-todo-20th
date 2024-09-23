import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyle";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
