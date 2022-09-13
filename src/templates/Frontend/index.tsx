import React from "react";
import { Navbar } from "../../components/organisms/Navbar";
import { Hero } from "../../components/organisms/Hero";
import { Partners } from "../../components/organisms/Partners";
import { Info } from "../../components/organisms/Info";
import { Resources } from "../../components/organisms/Resources";
import { Testimonials } from "../../components/organisms/Testimonials";

import * as S from "./styles";

type FrontendProps = {
  children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
  return (
    <S.Container>
      <Navbar></Navbar>
      <Hero></Hero>
      <Partners></Partners>
      <Info></Info>
      <Resources></Resources>
      <Testimonials></Testimonials>
    </S.Container>
  );
};

export default Frontend;
