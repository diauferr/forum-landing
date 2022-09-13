import React from "react";

import { SectionTitle } from "../../atoms/SectionTitle";
import { Avatar } from "../../atoms/Avatar";

import * as S from "./styles";

interface Props {
  id: number;
  img: string;
  name: string;
  desc: string;
}

const data = [
  {
    id: 1,
    img: "./assets/Author1.png",
    name: "Ministro Luís Roberto Barroso",
    desc: "Ministro do STF. Professor Titular de Direito Constitucional da UERJ.",
  },
  {
    id: 2,
    img: "./assets/Author2.png",
    name: "Ministro Luiz Fux",
    desc: "Ministro do STF. Professor Titular de Direito Processual Civil da Universidade do Estado do Rio de Janeiro (UERJ)s",
  },
  {
    id: 3,
    img: "./assets/Author3.png",
    name: "Ministra Carmém Lúcia",
    desc: "Ministra do Supremo Tribunal Federal.",
  },
];

export const Authors = () => {
  return (
    <S.Main>
      <SectionTitle text="Nossos autores" color="#1D2538" />
      <S.Wrapper>
        {data.map((item: Props) => (
          <Avatar
            key={item.id}
            img={item.img}
            name={item.name}
            desc={item.desc}
          ></Avatar>
        ))}
      </S.Wrapper>
    </S.Main>
  );
};
