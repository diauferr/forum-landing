import React from "react";

import * as S from "./styles";

import Image from "../../assets/Hamburguer.svg";

export const Hamburguer = () => {
  return (
    <S.Button>
      <img src={Image} alt="" />
    </S.Button>
  );
};
