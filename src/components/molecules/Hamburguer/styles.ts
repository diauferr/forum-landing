import styled from "styled-components";

interface Props {
    src: string;
  }

export const Button = styled.button`
    height: 100%;
    background-color: transparent;
    margin-right: 10px;
`;

export const Image = styled.img<Props>`
    height: 80%;
    width: 80%;
`;
