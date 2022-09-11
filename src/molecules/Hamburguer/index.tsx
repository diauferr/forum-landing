import React from "react";

import * as S from "./styles";

import Image from "../../assets/menu.svg";

export const Hamburguer = () => {
  return (
    <S.Button>
      <S.Image src={Image} alt="" />
    </S.Button>
  );
};
