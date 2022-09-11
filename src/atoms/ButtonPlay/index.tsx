import React from "react";

import * as S from "./styles";

import Image from "../../assets/Play.svg";

interface Props {
  text: string;
}

export const ButtonPlay = ({ text }: Props) => {
  return (
    <S.Container>
      <S.Button fontSize={18} backgroundColor={"#D7282F"} color={"#FFF"}>
        {text}
      </S.Button>
      <S.Image src={Image} alt="" />
    </S.Container>
  );
};
