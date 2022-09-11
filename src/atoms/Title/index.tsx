import React from "react";

import * as S from "./styles";

interface Props {
  text: string;
}

export const Title = ({ text }: Props) => {
  return <S.Title color="black">{text}</S.Title>;
};
