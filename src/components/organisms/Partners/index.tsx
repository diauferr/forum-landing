import React from "react";

import { SubTitle } from "../../atoms/SubTitle";

import Camara from "/assets/camara.svg";
import Stf from "/assets/stf.svg";
import Stj from "/assets/stj.svg";
import Agu from "/assets/agu.svg";

import * as S from "./styles";
import { SectionTitle } from "../../atoms/SectionTitle";

export const Partners = () => {
  return (
    <S.Main>
      <SectionTitle
        color="#1D2538"
        text="Nossos parceiros e clientes"
      ></SectionTitle>
      <S.Container>
        <S.Image src={Camara} alt="" />
        <S.Image src={Stf} alt="" />
        <S.Image src={Stj} alt="" />
        <S.Image src={Agu} alt="" />
      </S.Container>
    </S.Main>
  );
};
