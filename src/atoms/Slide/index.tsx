import React from "react";

import * as S from "./styles";

interface Props {
  author: string;
  description: string;
  message: string;
}

export const Slide = ({ author, description, message }: Props) => {
  return (
    <S.Main>
      <S.Message>“ {message} ”</S.Message>
      <S.Author>{author}</S.Author>
      <S.Description>{description}</S.Description>
    </S.Main>
  );
};
