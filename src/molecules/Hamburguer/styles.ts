import styled from "styled-components";

interface Props {
    src: string;
  }

export const Button = styled.button`
    height: 58px;
    width: 58px;
    background-color: white;
`;

export const Image = styled.image<Props>`
    height: 100%;
    width: 100%;
`;
