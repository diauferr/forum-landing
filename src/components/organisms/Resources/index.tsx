import React from "react";

import Image from "/assets/Resources.svg";

import * as S from "./styles";
import { SectionTitle } from "../../atoms/SectionTitle";
import { Features } from "../../molecules/Features";

interface Props {
  id: number;
  title: string;
  icon: any;
  desc: string;
}

const data: Props[] = [
  {
    id: 1,
    title: "Pesquisa Avançada",
    icon: "/assets/Pesquisa.svg",
    desc: "Permite limitar o resultado por autor/palestrante, período, tipo de publicação, área de interesse, evento, série de publicações, tipo de artigo.",
  },
  {
    id: 2,
    title: "Minhas Anotações",
    icon: "/assets/Anotacoes.svg",
    desc: "Acesso rápido às marcações feitas no texto.",
  },
  {
    id: 3,
    title: "Minhas Pastas",
    icon: "/assets/Pastas.svg",
    desc: "Permite organizar, reunir e compartilhar publicações.",
  },
  {
    id: 4,
    title: "Recursos de Marcações",
    icon: "/assets/Recursos.svg",
    desc: "Permite marcações no texto (realce, caneta, tachado e sublinhado), inserção de notas e anotações.",
  },
];

export const Resources = () => {
  return (
    <S.Main>
      <SectionTitle text="Recursos" color="white" />
      <S.Container>
        <S.Wrapper>
          {data.map((item: Props) => (
            <Features item={item} />
          ))}
        </S.Wrapper>
        <S.Picture src={Image} />
      </S.Container>
    </S.Main>
  );
};
