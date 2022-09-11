import React from "react";

import * as S from "./styles";

interface Props {
  text: string;
}

export const SubTitle = ({ text }: Props) => {
  return <S.SubTitle color="blue">{text}</S.SubTitle>;
};
