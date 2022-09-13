import React from "react";

import { SwiperSlide } from "swiper/react";

import { SectionTitle } from "../../atoms/SectionTitle";
import { Slider } from "../../molecules/Slider";

import * as S from "./styles";

interface Props {
  id: number;
  author: string;
  description: string;
  message: string;
}

export const Testimonials = () => {
  return (
    <S.Main>
      <SectionTitle text="Depoimentos" color="#1D2538" />
      <Slider />
    </S.Main>
  );
};
