import React from "react";
import { Navbar } from "../../components/organisms/Navbar";
import { Hero } from "../../components/organisms/Hero";
import { Partners } from "../../components/organisms/Partners";
import { Info } from "../../components/organisms/Info";
import { Resources } from "../../components/organisms/Resources";
import { Testimonials } from "../../components/organisms/Testimonials";
import { Authors } from "../../components/organisms/Authors";
import { Action } from "../../components/organisms/Action";
import { Faq } from "../../components/organisms/Faq";
import { Newsletter } from "../../components/organisms/Newsletter";

import * as S from "./styles";

type FrontendProps = {
  children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
  return (
    <S.Container>
      <Navbar />
      <Hero />
      <Partners />
      <Info />
      <Resources />
      <Testimonials />
      <Authors />
      <Action />
      <Faq />
      <Newsletter />
    </S.Container>
  );
};

export default Frontend;
