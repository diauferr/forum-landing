import React from "react";

import * as S from "./styles";

interface Props {
  text: string;
  color: string;
}

export const SubTitle = ({ text, color }: Props) => {
  return <S.SubTitle color={color}>{text}</S.SubTitle>;
};
