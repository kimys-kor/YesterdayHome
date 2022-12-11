import { useEffect, useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import Page from "./Components/Page";
import { ThemeContext } from "./Context/ThemeContext";
import { GlobalStyle } from "./GlobalStyle";
import { light, dark } from "./theme";

const Navbarbox = styled.nav`
  position: sticky;
  top: 0;
`;

function App() {
  const LocalTheme = window.localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(LocalTheme);
  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };
  const themeObject = theme === "light" ? light : dark;

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={themeObject}>
        <GlobalStyle />
        <Page></Page>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
