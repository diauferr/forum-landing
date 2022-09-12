import React from "react";
import { Navbar } from "../../organisms/Navbar";
import { Hero } from "../../organisms/Hero";
import { Partners } from "../../organisms/Partners";
import { Info } from "../../organisms/Info";

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
    </S.Container>
  );
};

export default Frontend;
