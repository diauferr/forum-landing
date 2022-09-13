import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./styles";

import "swiper/css";
import "swiper/css/pagination";

import { Slide } from "../../atoms/Slide";

// import required modules
import { Pagination } from "swiper";

interface Props {
  id: number;
  author: string;
  description: string;
  message: string;
}

const data: Props[] = [
  {
    id: 1,
    author: "Elano Lima de Oliveira",
    description: "Diretoria de Controle de Atos de Pessoal - TCE/CE",
    message:
      "A plataforma fomenta a produção na qualidade de pareceres técnicos. Com o conteúdo disponível por lá, consigo resolver a pesquisa doutrinária para enriquecer algum ponto mais controverso nos pareceres. Além disso, representa uma economia de tempo e de papel, já que no tribunal estão trabalhando cada vez mais com processos eletrônicos.",
  },
  {
    id: 2,
    author: "Elano Lima de Oliveira",
    description: "Diretoria de Controle de Atos de Pessoal - TCE/CE",
    message:
      "A plataforma fomenta a produção na qualidade de pareceres técnicos. Com o conteúdo disponível por lá, consigo resolver a pesquisa doutrinária para enriquecer algum ponto mais controverso nos pareceres. Além disso, representa uma economia de tempo e de papel, já que no tribunal estão trabalhando cada vez mais com processos eletrônicos.",
  },
  {
    id: 3,
    author: "Elano Lima de Oliveira",
    description: "Diretoria de Controle de Atos de Pessoal - TCE/CE",
    message:
      "A plataforma fomenta a produção na qualidade de pareceres técnicos. Com o conteúdo disponível por lá, consigo resolver a pesquisa doutrinária para enriquecer algum ponto mais controverso nos pareceres. Além disso, representa uma economia de tempo e de papel, já que no tribunal estão trabalhando cada vez mais com processos eletrônicos.",
  },
  {
    id: 4,
    author: "Elano Lima de Oliveira",
    description: "Diretoria de Controle de Atos de Pessoal - TCE/CE",
    message:
      "A plataforma fomenta a produção na qualidade de pareceres técnicos. Com o conteúdo disponível por lá, consigo resolver a pesquisa doutrinária para enriquecer algum ponto mais controverso nos pareceres. Além disso, representa uma economia de tempo e de papel, já que no tribunal estão trabalhando cada vez mais com processos eletrônicos.",
  },
];

export const Slider = () => {
  return (
    <S.Main>
      <Swiper
        initialSlide={1}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {data.map((item: Props) => (
          <SwiperSlide key={item.id}>
            <Slide
              message={item.message}
              author={item.author}
              description={item.description}
            ></Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Main>
  );
};
