import React from "react";

import useWindowDimensions from "../../../helpers/useWindowDimensions";

import Image from "/assets/Hero.svg";

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
          color="#1D2538"
          text="Conteúdo jurídico certificado ilimitado"
        ></Title>
        <SubTitle
          color="#1D2538"
          text="Para uma experiência de pesquisa segura, prática e completa"
        ></SubTitle>
        <ButtonPlay
          backgroundColor="#D7282F"
          color="#FFF"
          text="Consulte especialistas"
        />
      </S.Container>
      <S.Image src={Image}></S.Image>
    </S.Main>
  );
};
