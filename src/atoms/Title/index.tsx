import React from "react";

import * as S from "./styles";

interface Props {
  text: string;
  fontSize: number;
}

export const Title = ({ text, fontSize }: Props) => {
  return (
    <S.Title fontSize={fontSize} color="#000000">
      {text}
    </S.Title>
  );
};
