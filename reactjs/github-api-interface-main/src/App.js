import React from "react";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";
import { ThemeProvider } from "styled-components";
import light from "./components/layout/themes/light";
import dark from "./components/layout/themes/dark";
import GlobbalStyle from './global/global'
import Header from "./components/header";
import usePersistedStade from ';/utils/usePersistedStade'

const App = () => {

  const [theme, setTheme] = usePersistedStade('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  const { githubState } = useGithub();
  return (
    <ThemeProvider theme={theme}>
   
   
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Header toggleTheme={toggleTheme}/>
              <GlobbalStyle/>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
  
    </ThemeProvider>
  );
};

export default App;


