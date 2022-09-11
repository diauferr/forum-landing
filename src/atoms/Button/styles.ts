import styled from "styled-components";

interface Props {
    fontSize: number;
    backgroundColor: string;
    color: string;
  }

export const Button = styled.button<Props>`
    color: ${props => `${props.color}`};
    font-size: ${props => `${props.fontSize}px`};
    height: 58px;
    width: auto;
    min-width: 155px;
    padding-right: 57px;
    padding-left: 57px;
    background-color: ${props => `${props.backgroundColor}`};
    border-radius: 18px;
    font-family: 'Circular Std Bold';
`;