import React from "react";

import Dot from "/assets/Dot.svg";

import * as S from "./styles";

interface Props {
  id: number;
  title: string;
  icon: any;
  desc: string;
}

const data: Props[] = [
  {
    id: 1,
    title: "Revistas",
    icon: "./assets/Revistas.svg",
    desc: "Fonte de Doutrina de juristas renomados, jurisprudência selecionada e comentários sobre mudanças na Legislação.",
  },
  {
    id: 2,
    title: "Livros",
    icon: "./assets/Livros.svg",
    desc: "Importantes obras jurídicas contendo estudos em diversas áreas do Direito.",
  },
  {
    id: 3,
    title: "Vídeos",
    icon: "./assets/Videos.svg",
    desc: "Rica fonte de citação para fundamentação de processos, são gravados durante conferências e palestras exclusivas.",
  },
  {
    id: 4,
    title: "Informativos",
    icon: "./assets/Infos.svg",
    desc: "Contêm normas, decretos, portarias e a seleção das principais notícias de interesse aos profissionais do Direito.",
  },
];

export const Card = () => {
  return (
    <S.Main>
      {data.map((item: Props) => (
        <S.Card key={item.id}>
          <S.Icon src={item.icon} alt={item.title} />
          <S.Dot src={Dot} alt="" />
          <S.Name color="#1D2538" text={item.title} key={item.id} />
          <S.Desc>{item.desc}</S.Desc>
        </S.Card>
      ))}
    </S.Main>
  );
};
