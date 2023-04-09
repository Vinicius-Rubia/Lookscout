import { DefaultTheme, ThemeProvider } from "styled-components";
import { BrowserRouter, Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import usePersistedState from "./utils/usePersistedState";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Header from "./components/Header";
import Router from "./routes/router";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toogleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header toogleTheme={toogleTheme} />
        <Router />
        <Outlet />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
