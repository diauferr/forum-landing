import React from "react";

import { Link } from "../../atoms/Link";
import Image from "/assets/Logo.svg";
import Twitter from "/assets/Twitter.svg";
import Instagram from "/assets/Instagram.svg";
import Facebook from "/assets/Facebook.svg";

import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Main>
      <S.Wrapper>
        <S.Logo src={Image} />
        <S.Links>
          <Link text="Home" isActive={true}></Link>
          <Link text="A Fórum"></Link>
          <Link text="Plataforma"></Link>
        </S.Links>
        <S.Links>
          <Link text="Autores"></Link>
          <Link text="Revistas"></Link>
          <Link text="Contato"></Link>
        </S.Links>
        <S.Social>
          <S.Title>Mídias sociais</S.Title>
          <S.Group>
            <S.Image src={Twitter} alt="" />
            <S.Image src={Instagram} alt="" />
            <S.Image src={Facebook} alt="" />
          </S.Group>
        </S.Social>
      </S.Wrapper>
      <S.Copyright>© 2022. Todos os direitos reservados</S.Copyright>
    </S.Main>
  );
};
