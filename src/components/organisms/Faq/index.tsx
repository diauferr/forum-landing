import React from "react";

import { SectionTitle } from "../../atoms/SectionTitle";
import { Collapse } from "../../molecules/Collapse";

import * as S from "./styles";

export const Faq = () => {
  return (
    <S.Main>
      <S.Wrapper>
        <SectionTitle text="FAQ" color="#1D2538" />
        <S.Title>Perguntas frequêntes sobre a plataforma</S.Title>
        <Collapse></Collapse>
      </S.Wrapper>
    </S.Main>
  );
};
