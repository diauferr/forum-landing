import React from "react";

import * as S from "./styles";

interface Props {
  isActive?: boolean;
  text: string;
}

export const Link = ({ text, isActive }: Props) => {
  return <S.Link isActive={isActive}>{text}</S.Link>;
};
