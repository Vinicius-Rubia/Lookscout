import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import Alert from "./components/Alert";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      {/* <Alert /> */}
      <Home />
    </ThemeProvider>
  );
}

export default App;
