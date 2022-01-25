import React, { useState } from "react";
import {useContext} from "typescript"
import useGithub from "../../hooks/github-hooks";
import Switch from 'react-switch'
import { Container } from "./styled";
import { ThemeContext } from "styled-components";


interface Props {
    toggleTheme(): void;
}
const Header: React.FC = ({toggleTheme}) => {
  const {colors, title} = useContext{ThemeContext}
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  }
  };

  return (
    <Container>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <Switch
          onChange={(toggleTheme) => {}}
          checked={title === 'dark'} checkedIcon={false} uncheckedIcon={false}
          height={10} wight={40} handDiameter={20}
          />

        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
    </Container>
  );
};

export default Header;
