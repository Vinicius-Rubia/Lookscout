import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import Alert from "./components/Alert";
import { useSelector } from "react-redux";
import { selectAlert } from "./redux/alertSlice";

function App() {
  const alert = useSelector(selectAlert);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Alert showAlert={alert} />
      <Home />
    </ThemeProvider>
  );
}

export default App;
