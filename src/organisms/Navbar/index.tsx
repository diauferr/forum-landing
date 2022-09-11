import { useState, useEffect } from "react";

import * as S from "./styles";

import useWindowDimensions from "../../helpers/useWindowDimensions";
import Menu from "../../molecules/Menu";
import Logo from "../../atoms/Logo";
import { Hamburguer } from "../../molecules/Hamburguer";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1024) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeNavbar = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  const { width } = useWindowDimensions();

  return (
    <S.Navbar className={navbar ? "active" : "normal"}>
      <Logo />
      <S.Sub>{width >= 1024 ? <Menu /> : <Hamburguer />}</S.Sub>
    </S.Navbar>
  );
};
