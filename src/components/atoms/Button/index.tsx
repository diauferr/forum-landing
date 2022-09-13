import React from "react";

import * as S from "./styles";

interface Props {
  text: string;
}

export const Button = ({ text }: Props) => {
  return (
    <S.Button backgroundColor="#D7282F" color="#FFF">
      {text}
    </S.Button>
  );
};
