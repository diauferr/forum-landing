import React from "react";

import * as S from "./styles";

interface Props {
  text: string;
  fontSize: number;
}

export const SubTitle = ({ text, fontSize }: Props) => {
  return (
    <S.SubTitle fontSize={fontSize} color="blue">
      {text}
    </S.SubTitle>
  );
};
