import React from "react";

import * as S from "./styles";

interface Props {
  text: string;
  color: string;
}

export const Topic = ({ text, color }: Props) => {
  return <S.Topic color={color}>{text}</S.Topic>;
};
