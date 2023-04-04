import { DefaultTheme, ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import Alert from "./components/Alert";
import { useSelector } from "react-redux";
import { selectAlert } from "./redux/alertSlice";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Header from "./components/Header";

function App() {
  const alert = useSelector(selectAlert);
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toogleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Alert showAlert={alert} />
      <Header toogleTheme={toogleTheme} />
      <Home />
    </ThemeProvider>
  );
}

export default App;
