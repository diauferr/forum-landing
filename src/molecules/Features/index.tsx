import React from "react";

import * as S from "./styles";

interface Props {
  item: any;
}

export const Features = ({ item }: Props) => {
  return (
    <S.Card key={item.id}>
      <S.Icon src={item.icon} alt={item.title} />
      <S.Title key={item.id}>{item.title}</S.Title>
      <S.Desc>{item.desc}</S.Desc>
    </S.Card>
  );
};
