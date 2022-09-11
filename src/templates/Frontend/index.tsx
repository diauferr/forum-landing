import React from "react";
import Navbar from "../../organisms/Navbar";

import * as S from "./styles";

type FrontendProps = {
  children: React.ReactNode;
};

const Frontend = ({ children }: FrontendProps) => {
  return (
    <S.Container>
      <Navbar></Navbar>
    </S.Container>
  );
};

export default Frontend;
