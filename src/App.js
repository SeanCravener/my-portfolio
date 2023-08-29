import { GlobalStyle, ThemeProvider } from "@react95/core";
import Desktop from "./components/Desktop";

function App() {
  return (
    <ThemeProvider theme={"win95"}>
      <GlobalStyle />
      <Desktop />
    </ThemeProvider>
  );
}

export default App;
