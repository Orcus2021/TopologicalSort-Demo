import { createGlobalStyle, ThemeProvider } from "styled-components";
import { THEME } from "./constants/theme";
import TopologicalPage from "./pages/TopologicalPage";

const GlobalStyle = createGlobalStyle`
  * {
	box-sizing: border-box;
  }

  body {
	margin: 0;
	padding: 0;
  color: white;
  }
`;
function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
