import React from "react";

import * as S from "./styles";

interface Props {
  isActive?: boolean;
  text: string;
  route?: string;
}

export const Link = ({ text, isActive, route }: Props) => {
  return (
    <S.Link isActive={isActive} href={route}>
      {text}
    </S.Link>
  );
};
