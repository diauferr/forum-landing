import { useState, useEffect } from "react";

import * as S from "./styles";

import useWindowDimensions from "../../helpers/getViewport";
import Menu from "../../molecules/Menu";
import Logo from "../../atoms/Logo";
import { Hamburguer } from "../../molecules/Hamburguer";

const Navbar = () => {
  const { width } = useWindowDimensions();

  return (
    <S.Navbar>
      <Logo />
      <S.Sub>{width >= 1024 ? <Menu /> : <Hamburguer />}</S.Sub>
    </S.Navbar>
  );
};

export default Navbar;
