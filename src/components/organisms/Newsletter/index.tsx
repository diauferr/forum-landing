import React from "react";

import { SectionTitle } from "../../atoms/SectionTitle";
import { Input } from "../../atoms/Input";

import * as S from "./styles";

export const Newsletter = () => {
  return (
    <S.Main>
      <SectionTitle text="Assine nossa newsletter!" color="#fff"></SectionTitle>
      <S.Desc>
        Receba informacions períodicas sobre a Fórum e novos artigos publicados
      </S.Desc>
      <Input></Input>
    </S.Main>
  );
};
