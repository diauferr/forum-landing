import React from "react";

import * as S from "./styles";

interface Props {
  img: string;
  name: string;
  desc: string;
}

export const Avatar = ({ img, name, desc }: Props) => {
  return (
    <S.Avatar>
      <S.Image src={img} />
      <S.Name>{name}</S.Name>
      <S.Desc>{desc}</S.Desc>
    </S.Avatar>
  );
};
