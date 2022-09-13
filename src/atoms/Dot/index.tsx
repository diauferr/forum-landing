import React from "react";

import * as S from "./styles";

interface Props {
  text: string;
  color: string;
}

export const Dot = ({ text, color }: Props) => {
  return <S.Dot color={color}>{text}</S.Dot>;
};
