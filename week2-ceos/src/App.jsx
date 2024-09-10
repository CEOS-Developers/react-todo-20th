import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "./App.css";
import { GlobalStyle } from "./styles/globalStyle";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoPage />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
