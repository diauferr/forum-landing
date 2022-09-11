import React from "react";

import * as S from "./styles";

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <S.Button fontSize={18} backgroundColor={"#D7282F"} color={"#FFF"}>
      {text}
    </S.Button>
  );
};

export default Button;
