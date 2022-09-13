import React from "react";

import { Dot } from "../../atoms/Dot";

import * as S from "./styles";

interface Props {
  item: any;
}

export const Card = ({ item }: Props) => {
  return (
    <S.Card key={item.id}>
      <S.Icon src={item.icon} alt={item.title} />
      <Dot text={item.id} color="#fff" />
      <S.Name color="#1D2538" text={item.title} key={item.id} />
      <S.Desc>{item.desc}</S.Desc>
    </S.Card>
  );
};
