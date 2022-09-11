import React from "react";

import Button from "../../atoms/Button";
import { Link } from "../../atoms/Link";

import * as S from "./styles";

const Menu = () => {
  return (
    <S.Container>
      <S.Menu>
        <Link isActive={true} text="Home"></Link>
        <Link text="A Fórum"></Link>
        <Link text="Plataforma"></Link>
        <Link text="Autores"></Link>
        <Link text="Revistas"></Link>
        <Link text="Contato"></Link>
      </S.Menu>
      <Button text="Login" />
    </S.Container>
  );
};

export default Menu;
