import React from "react";
import { Navbar } from "../../organisms/Navbar";
import { Hero } from "../../organisms/Hero";
import { Partners } from "../../organisms/Partners";

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
      <Partners></Partners>
      <Partners></Partners>
      <Partners></Partners>
      <Partners></Partners>
      <Partners></Partners>
      <Partners></Partners>
      <Partners></Partners>
      <Partners></Partners>
    </S.Container>
  );
};

export default Frontend;
