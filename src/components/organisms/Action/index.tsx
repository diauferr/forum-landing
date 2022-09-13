import React from "react";

import { SectionTitle } from "../../atoms/SectionTitle";
import { ButtonPlay } from "../../atoms/ButtonPlay";
import Image from "/assets/Display.png";

import * as S from "./styles";

export const Action = () => {
  return (
    <S.Main>
      <S.Wrapper>
        <SectionTitle text="Faz sentido para você?" color="#fff" />
        <S.Desc>
          Mais de 6000 volumes à sua disposição e ordenados por módulos.
          Ajudamos nossos clientes a tomar decisões bem fundamentadas e operar
          de maneira eficaz.
        </S.Desc>
        <ButtonPlay
          color="#D7282F"
          backgroundColor="#fff"
          text="Consulte especialistas"
        />
      </S.Wrapper>
      <S.Image src={Image} alt="" />
    </S.Main>
  );
};
