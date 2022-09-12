import React from "react";

import * as S from "./styles";

interface Props {
  text: string;
  color: string;
}

export const Title = ({ text, color }: Props) => {
  return <S.Title color={color}>{text}</S.Title>;
};
