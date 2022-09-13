import React from "react";

import * as S from "./styles";

interface Props {
  text: string;
  color: string;
}

export const SectionTitle = ({ text, color }: Props) => {
  return <S.SectionTitle color={color}>{text}</S.SectionTitle>;
};
