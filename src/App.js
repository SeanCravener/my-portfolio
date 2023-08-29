import { GlobalStyle, ThemeProvider } from "@react95/core";
import Desktop from "./components/Desktop";
import { WindowProvider } from "./context/WindowContext";

function App() {
  return (
    <WindowProvider>
      <ThemeProvider theme={"win95"}>
        <GlobalStyle />
        <Desktop />
      </ThemeProvider>
    </WindowProvider>
  );
}

export default App;
