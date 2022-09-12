import React from "react";

import { Title } from "../../atoms/Title";

import Camara from "/assets/camara.svg";
import Stf from "/assets/stf.svg";
import Stj from "/assets/stj.svg";
import Agu from "/assets/agu.svg";

import * as S from "./styles";

export const Partners = () => {
  return (
    <S.Main>
      <Title color="#1D2538" text="Nossos parceiros e clientes"></Title>
      <S.Container>
        <S.Image src={Camara} alt="" />
        <S.Image src={Stf} alt="" />
        <S.Image src={Stj} alt="" />
        <S.Image src={Agu} alt="" />
      </S.Container>
    </S.Main>
  );
};
