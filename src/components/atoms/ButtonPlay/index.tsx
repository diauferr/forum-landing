import React from "react";

import * as S from "./styles";

import Image from "/assets/Play.svg";

interface Props {
  text: string;
  backgroundColor: string;
  color: string;
}

export const ButtonPlay = ({ text, backgroundColor, color }: Props) => {
  return (
    <S.Container>
      <S.Button fontSize={18} backgroundColor={backgroundColor} color={color}>
        {text}
      </S.Button>
      <S.Image src={Image} alt="" />
    </S.Container>
  );
};
