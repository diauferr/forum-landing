import React from "react";

import useWindowDimensions from "../../helpers/getViewport";

import Image from "../../../public/assets/Hero.svg";

import { Title } from "../../atoms/Title";
import { SubTitle } from "../../atoms/SubTitle";
import { ButtonPlay } from "../../atoms/ButtonPlay";

import * as S from "./styles";

export const Hero = () => {
  const { width } = useWindowDimensions();

  return (
    <S.Main>
      <S.Container>
        <Title
          fontSize={width >= 1024 ? 65 : 32}
          text="Conteúdo jurídico certificado ilimitado"
        ></Title>
        <SubTitle
          fontSize={width >= 1024 ? 20 : 16}
          text="Para uma experiência de pesquisa segura, prática e completa"
        ></SubTitle>
        <ButtonPlay text="Consulte especialistas" />
      </S.Container>
      <S.Image src={Image}></S.Image>
    </S.Main>
  );
};
